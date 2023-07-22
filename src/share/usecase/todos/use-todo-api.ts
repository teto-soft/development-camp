import { TableNames } from '@/constants';
import { useSupabaseFunction } from '@/share/hooks';
import { Todo } from '@/share/types';

export const useTodoApi = () => {
  const api = useSupabaseFunction<Todo>(TableNames.todo);
  return api;
};
