import { useCallback } from 'react';

import { useTodoStore } from '@/share/store';
import { useTodoApi } from '@/share/usecase/todos/use-todo-api';


export const useFetchTodos = () => {
  const api = useTodoApi();
  const setTodos = useTodoStore((store) => store.setTodos);

  const fetchTodos = useCallback(async () => {
    const todos = await api.find({
      filters:[],
      limit: 10,
      orders: [['created_at', false]],
    });


    if (todos) {
      setTodos(todos);
    }
  },[setTodos]);

  return fetchTodos;
};
