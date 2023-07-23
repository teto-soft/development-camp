import { TableNames } from '@/constants';
import { useSupabaseFunction } from '@/share/hooks';
import { Story } from '@/share/types';

export const useStoryApi = () => {
  const api = useSupabaseFunction<Story>(TableNames.story);
  return api;
};
