import { AddIcon, ChatIcon, SettingsIcon } from '@chakra-ui/icons';
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

const items = [
  { id: 1, name: 'test1' },
  { id: 2, name: 'test2' },
];

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
    <BaseLayout mx="0" overflowX="hidden" px="0">
      <HStack h="100vh" overflowX="hidden" spacing="12">
        <Flex
          alignItems="center"
          bgColor="gray"
          flexDirection="column"
          h="100%"
          justifyContent="space-between"
          width="lg"
        >
          <Box mt="10px" textAlign="center">
            <Button colorScheme="teal" mb="30px">
              <AddIcon mr="10px"></AddIcon>
              New Story
            </Button>
            <Flex alignItems="center" flexDirection="column">
              {items.map((item, index) => {
                return (
                  <Button _hover={{ bg: 'white' }} key={index} w="190px">
                    <ChatIcon mr="2" />
                    <Text>{item.name}</Text>
                  </Button>
                );
              })}
            </Flex>
          </Box>
          <Button _hover={{ bg: 'white' }} mb="8">
            <Avatar mr="4" name={sentences[0].name} src={sentences[0].src} />
            <Text>{user?.name}</Text>
            <SettingsIcon ml="10px" />
          </Button>
        </Flex>
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
                <Avatar mr="8" name={sentence.name} src={sentence.src} />
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
