import { Avatar, Box, Button, Flex, HStack, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import { memo, useEffect, useRef, useState } from 'react';

import SentenceInput from '@/components/model/story/sentence-input/sentence-input';
import { BaseLayout } from '@/components/ui';
import { useAppStore } from '@/share/store';
import { useFetchUser } from '@/share/usecase/user';

export interface Sentence {
  name: string;
  src: string;
  text: string;
}

const StoryPage: NextPage = memo(() => {
  const fetchUser = useFetchUser();
  const user = useAppStore((state) => state.user);

  const AlwaysScrollToBottom = () => {
    const elementRef = useRef<HTMLDivElement>(null);
    useEffect(() => elementRef.current?.scrollIntoView());

    return <div ref={elementRef} />;
  };

  const [sentences, setSentences] = useState<Sentence[]>([
    {
      name: 'Dan Abrahmov',
      src: 'https://bit.ly/dan-abramov',
      text: 'Hello World',
    },
    {
      name: 'Kola Tioluwani',
      src: 'https://bit.ly/tioluwani-kolawole',
      text: 'This day is beautiful. I am happy. I am learning Chakra UI today and it makes me hap',
    },
    {
      name: 'Kent Dodds',
      src: 'https://bit.ly/kent-c-dodds',
      text: 'I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap',
    },
    {
      name: 'Kent Dodds',
      src: 'https://bit.ly/kent-c-dodds',
      text: 'I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap',
    },
    {
      name: 'Kent Dodds',
      src: 'https://bit.ly/kent-c-dodds',
      text: 'I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap',
    },
    {
      name: 'Kent Dodds',
      src: 'https://bit.ly/kent-c-dodds',
      text: 'I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap',
    },
    {
      name: 'Kent Dodds',
      src: 'https://bit.ly/kent-c-dodds',
      text: 'I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap',
    },
  ]);

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
        <Flex
          direction="column"
          h="100%"
          justifyContent="space-between"
          m="4"
          position="relative"
          w="100%"
        >
          <Flex
            direction="column"
            overflowX="auto"
            sx={{
              '&::-webkit-scrollbar': {
                bgColor: 'dark',
                width: '2',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: `whiteAlpha.700`,
                borderRadius: '16',
              },
            }}
          >
            {sentences.map((sentence, index) => (
              <Flex color="whiteAlpha.700" key={index} my="2" p="3" w="100%">
                <Avatar mr={8} name={sentence.name} src={sentence.src} />
                <Text>{sentence.text}</Text>
              </Flex>
            ))}
            <AlwaysScrollToBottom />
          </Flex>
          <SentenceInput />
          <Box h="12" />
        </Flex>
      </HStack>
    </BaseLayout>
  );
});

StoryPage.displayName = 'TopPage';

export default StoryPage;
