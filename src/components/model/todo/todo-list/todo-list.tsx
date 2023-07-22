import { Box, Checkbox, Flex, VStack } from '@chakra-ui/react';

import { useTodoList } from '@/components/model/todo/todo-list/hooks/use-todo-list';

export const TodoList = () => {
  const { todos } = useTodoList();

  return (
    <Box py="1rem">
      Todos:
      <VStack alignItems="start" pl="1rem" spacing="0.5rem">
        {todos.map((todo) => (
          <Flex alignItems="center" gap="0.5rem" key={todo.id}>
            <Checkbox />
            {todo.todo}
          </Flex>
        ))}
      </VStack>
    </Box>
  );
};
