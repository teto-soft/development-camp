import { useCallback } from 'react';

import { TableNames } from '@/constants';
import { useSupabaseFunction } from '@/share/hooks';
import { useSentenceStore } from '@/share/store/sentence-store/sentence.store';
import { Sentence } from '@/share/types/model/sentence.model';

export const useFetchSentences = () => {
  const api = useSupabaseFunction<Sentence>(TableNames.sentence);
  const setSentences = useSentenceStore((store) => store.setSentences);

  return useCallback(async () => {
    const sentences = await api.find({
      orders: [['created_at', false]],
    });

    if (sentences) {
      setSentences(sentences);
    }
  }, [setSentences]);
};
