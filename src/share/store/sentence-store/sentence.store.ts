import { create } from 'zustand';

import { Sentence } from '@/share/types/model/sentence.model';

export type SentenceStoreType = {
  resetSentence: () => void;
  sentences: Sentence[];
  setSentences: (sentences: Sentence[]) => void;
};
export const useSentenceStore = create<SentenceStoreType>((set) => ({
  resetSentence: () => set(() => ({ sentences: [] })),
  sentences: [],
  setSentences: (sentences) => set(() => ({ sentences })),
}));
