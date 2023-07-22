import { create } from 'zustand';

import { Todo } from '@/share/types';

export type TodoStoreType = {
  resetTodo: () => void;
  setTodos: (todos: Todo[]) => void;
  todos: Todo[];
  updateTodo: (todo: Todo) => void;
};
export const useTodoStore = create<TodoStoreType>((set) => ({
  resetTodo: () => set(() => ({ todos: [] })),
  setTodos: (todos) => set(() => ({ todos })),
  todos: [],
  updateTodo: (todo) =>
    set((state) => ({
      todos: state.todos.map((t) => (t.id === todo.id ? todo : t)),
    })),
}));
