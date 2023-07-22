import { useCallback, useEffect } from 'react';

import { useTodoStore } from '@/share/store';
import { Todo } from '@/share/types';
import { useChangeCompleteTodos, useFetchTodos } from '@/share/usecase/todos';

export const useTodoList = () => {
  const todos = useTodoStore((store) => store.todos);

  const fetchTodos = useFetchTodos();
  const changeCompleteTodo = useChangeCompleteTodos();

  const handleChangeComplete = useCallback(async (todo: Todo) => {
    await changeCompleteTodo(todo);
  }, []);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return { handleChangeComplete, todos };
};
