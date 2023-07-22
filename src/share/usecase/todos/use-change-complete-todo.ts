import { useCallback } from 'react';

import { useTodoStore } from '@/share/store';
import { Todo } from '@/share/types';
import { useTodoApi } from '@/share/usecase/todos/use-todo-api';

export const useChangeCompleteTodos = () => {
  const api = useTodoApi();
  const updateTodo = useTodoStore((store) => store.updateTodo);

  const changeCompleteTodo = useCallback(
    async (todo: Todo) => {
      const req = {
        ...todo,
        is_completed: !todo.is_completed,
      };

      await api.update([['id', 'eq', req.id]], req);

      updateTodo(req);
    },
    [updateTodo],
  );

  return changeCompleteTodo;
};
