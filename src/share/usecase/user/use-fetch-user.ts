import { useCallback } from 'react';

import { useAppStore } from '@/share/store';

const mockUser = {
  created_at: '2020-01-01T00:00:00.000000Z',
  email: 'a@example.com',
  id: 'mock-id',
  name: 'モックユーザー',
};

export const useFetchUser = () => {
  // const userApi = useUserApi();
  const setUser = useAppStore((state) => state.setUser);

  return useCallback(
    async (id: string) => {
      // const user = await userApi.findById(id);

      const user = mockUser;

      if (user) {
        setUser(user);
      }
    },
    [setUser],
  );
};
