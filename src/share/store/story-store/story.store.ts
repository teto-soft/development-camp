import { create } from 'zustand';

import { Story } from '@/share/types';

export type StoryStoreType = {
  resetStory: () => void;
  setStories: (stories: Story[]) => void;
  stories: Story[];
};
export const useStoryStore = create<StoryStoreType>((set) => ({
  resetStory: () => set(() => ({ stories: [] })),
  setStories: (stories) => set(() => ({ stories })),
  stories: [],
}));
