import { useCallback } from 'react';

import { useAppStore } from '@/share/store';

const mockUser = { id: 'mock-id', name: 'モックユーザー' };

export const useFetchUser = () => {
  // const userApi = useUserApi();
  const setUser = useAppStore((state) => state.setUser);

  const fetchUser = useCallback(async (id: string) => {
    // const user = await userApi.findById(id);

    const user = mockUser;

    if (user) {
      setUser(user);
    }
  },[setUser]);

  return fetchUser;
};
