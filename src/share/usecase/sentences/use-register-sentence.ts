import { useCallback } from 'react';

import { TableNames } from '@/constants';
import { useSupabaseFunction } from '@/share/hooks';
import { Sentence } from '@/share/types/model/sentence.model';

interface RegisterSentenceProps {
  body: string;
  story_id: number;
  user_id: number;
}
export const useRegisterSentence = () => {
  const api = useSupabaseFunction<Sentence>(TableNames.sentence);

  return useCallback(
    async ({ body, story_id, user_id }: RegisterSentenceProps) => {
      await api.create({ body, story_id, user_id });
    },
    [],
  );
};
