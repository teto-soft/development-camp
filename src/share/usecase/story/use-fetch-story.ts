import { useCallback } from 'react';

import { useStoryStore } from '@/share/store/story-store/story.store';
import { useStoryApi } from '@/share/usecase/story/use-story-api';

export const useFetchStories = () => {
  const api = useStoryApi();
  const setStories = useStoryStore((store) => store.setStories);

  const fetchStories = useCallback(async () => {
    const stories = await api.find({
      filters: [],
      orders: [['created_at', false]],
    });

    if (stories) {
      setStories(stories);
    }
  }, [setStories]);

  return fetchStories;
};
