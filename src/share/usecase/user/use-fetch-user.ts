import { useEffect } from 'react';

import { useAppStore } from '@/share/store';

const mockUser = { id: 'mock-id', name: 'モックユーザー' };

export const useFetchUser = (id: string) => {
  // const userApi = useUserApi();
  const setUser = useAppStore((state) => state.setUser);

  const fetchUser = async (id: string) => {
    // const user = await userApi.findById(id);

    const user = mockUser;

    if (user) {
      setUser(user);
    }
  };

  useEffect(() => {
    fetchUser(id);
  }, [id]);
};
