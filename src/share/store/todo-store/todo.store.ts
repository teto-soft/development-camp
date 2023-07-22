import { create } from 'zustand';

import { Todo } from '@/share/types';

export type TodoStoreType = {
  resetTodo: () => void;
  setTodos: (todos: Todo[]) => void;
  todos: Todo[]
};
export const useTodoStore = create<TodoStoreType>((set) => ({
  resetTodo: () => set(() => ({ todos: [] })),
  setTodos: (todos) => set(() => ({ todos })),
  todos: [],
}));
