import { create } from 'zustand';

import { User } from '@/share/types';

export type AppStoreType = {
  resetUser: () => void;
  setUser: (user: User | null) => void;
  user: User | null;
};
export const useAppStore = create<AppStoreType>((set) => ({
  resetUser: () => set(() => ({ user: null })),
  setUser: (user) => set(() => ({ user })),
  user: null,
}));
