import { TableNames } from '@/constants';
import { useSupabaseFunction } from '@/share/hooks';
import { User } from '@/share/types';

export const useUserApi = () => {
  const api = useSupabaseFunction<User>(TableNames.user);
  return api;
};
