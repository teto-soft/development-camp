import { useAppStore } from '@/share/store';

export const useLoginUser = () => {
  const user = useAppStore((state) => state.user);
  return user;
};
