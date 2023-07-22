import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useCallback } from 'react';

import { TableNameTypes, ViewNameTypes } from '@/constants';
import {
  FindFilter,
  FindOrder,
} from '@/lib/supabase/supabase-query-helper.type';

export const useSupabaseFunction = <QueryType, MutateType = QueryType>(
  from: TableNameTypes | ViewNameTypes,
) => {
  const supabase = useSupabaseClient();

  const findById = async (primary: number | string | object, select = '*') => {
    const query =
      typeof primary === 'object'
        ? supabase
            .from(from)
            .select(select)
            .match({ ...primary })
            .limit(1)
        : supabase
            .from(from)
            .select(select)
            .filter('id', 'eq', primary)
            .limit(1);
    const res = await query;

    if (res.error) {
      throw res.error;
    }

    return res.data[0] as QueryType;
  };

  const find = useCallback(
    async ({
      filters = [],
      limit = 30,
      or = [],
      orders = [],
      range,
      select = '*',
    }: {
      filters?: FindFilter[];
      limit?: number;
      offset?: number;
      or?: FindFilter[];
      orders?: FindOrder[];
      range?: [number, number];
      select?: string;
    }) => {
      const query = supabase.from(from).select(select);

      filters.forEach(([column, op, value]) => {
        query.filter(column, op, value);
      });
      let orQuery = '';
      or.forEach(([column, op, value]) => {
        if (orQuery) {
          orQuery += `,${column}.${op}.${value}`;
        } else {
          orQuery += `${column}.${op}.${value}`;
        }
      });
      orQuery && query.or(orQuery);

      orders.forEach(([column, ascending]) => {
        query.order(column, { ascending });
      });
      if (range) {
        query.range(range[0], range[1]);
      }
      query.limit(limit);

      const res = await query;

      if (res.error) {
        throw res.error;
      }

      return res.data as QueryType[];
    },
    [supabase, from],
  );

  const create = useCallback(
    async (model: Partial<MutateType>, select = '*') => {
      const res = await supabase
        .from(from)
        .insert(model)
        .select(select)
        .single();

      if (res.error) {
        throw res.error;
      }

      return res.data as QueryType;
    },
    [supabase, from],
  );

  const update = useCallback(
    async (filters: FindFilter[], model: Partial<MutateType>, select = '*') => {
      const query = supabase.from(from).update(model);

      filters.forEach(([column, op, value]) => {
        query.filter(column, op, value);
      });

      const res = await query.select(select).single();

      if (res.error) {
        throw res.error;
      }

      return res.data as QueryType;
    },
    [supabase, from],
  );

  const upsert = useCallback(
    async (model: Partial<MutateType>, select = '*') => {
      const res = await supabase
        .from(from)
        .upsert(model)
        .select(select)
        .single();

      if (res.error) {
        throw res.error;
      }

      return res.data as QueryType;
    },
    [supabase, from],
  );

  const remove = async (primary: number | string | object) => {
    const query =
      typeof primary === 'object'
        ? supabase
            .from(from)
            .delete()
            .match({ ...primary })
            .single()
        : supabase.from(from).delete().filter('id', 'eq', primary).single();
    const res = await query;

    if (res.error) {
      throw res.error;
    }

    return primary;
  };

  const rpc = async <RpcReturn>(name: string, params: object) => {
    const res = await supabase.rpc(name, params);
    if (res.error) {
      throw res.error;
    }

    return res.data as RpcReturn;
  };

  return {
    create,
    find,
    findById,
    remove,
    rpc,
    update,
    upsert,
  };
};

export type UseSupabaseFunctionType<T> = ReturnType<
  typeof useSupabaseFunction<T>
>;
