import { Avatar, Box, Button, Flex, HStack, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import { memo, useEffect } from 'react';

import { BaseLayout } from '@/components/ui';
import { useAppStore } from '@/share/store';
import { useFetchUser } from '@/share/usecase/user';

const StoryPage: NextPage = memo(() => {
  const fetchUser = useFetchUser();
  const user = useAppStore((state) => state.user);

  useEffect(() => {
    fetchUser('mock-id');
  }, []);

  return (
    <BaseLayout mx="0" px="0">
      <HStack height={'100vh'} spacing="4">
        <Box bgColor={'lightgray'} height={'100%'} width={64}>
          <Button colorScheme="teal">New Story</Button>
          <Box>ユーザー名：{user?.name}</Box>
        </Box>
        <Box w={'100%'}>
          {sentences.map((sentence, index) => (
            <Flex
              bg="gray.100"
              color="black"
              key={index}
              my="1"
              p="3"
              w={'100%'}
            >
              <Avatar mr={8} name={sentence.name} src={sentence.src} />
              <Text>{sentence.text}</Text>
            </Flex>
          ))}
        </Box>
      </HStack>
    </BaseLayout>
  );
});

StoryPage.displayName = 'TopPage';

export default StoryPage;

const sentences = [
  {
    name: 'Dan Abrahmov',
    src: 'https://bit.ly/dan-abramov',
    text: 'Hello',
  },
  {
    name: 'Kola Tioluwani',
    src: 'https://bit.ly/tioluwani-kolawole',
    text: 'Hello',
  },
  {
    name: 'Kent Dodds',
    src: 'https://bit.ly/kent-c-dodds',
    text: 'Hello',
  },
];
