import { useEffect } from "react";

import { useTodoStore } from "@/share/store";
import { useFetchTodos } from "@/share/usecase/todos";


export const useTodoList = () => {
  const todos = useTodoStore((store) => store.todos);
  const fetchTodos = useFetchTodos();

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return {todos};
}