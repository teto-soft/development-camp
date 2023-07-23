import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';

import SentenceTextarea from '@/components/model/story/sentence-textarea/sentence-textarea';
import { Sentence } from '@/share/types/model/sentence.model';

interface StoryDetailProps {
  sentences: Sentence[];
}

const AlwaysScrollToBottom = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  useEffect(() => elementRef.current?.scrollIntoView());

  return <div ref={elementRef} />;
};

export default function StoryDetail({ sentences }: StoryDetailProps) {
  return (
    <Flex
      direction="column"
      h="100%"
      justifyContent="space-between"
      m="4"
      w="70vw"
    >
      <Flex direction="column" overflowX="auto">
        {sentences.map((sentence) => (
          <Flex key={sentence.id} my="2" p="3">
            <Avatar
              mr="8"
              src="https://avatars.dicebear.com/api/avataaars/1.svg"
            />
            <Text color="whiteAlpha.700">{sentence.body}</Text>
          </Flex>
        ))}
        <AlwaysScrollToBottom />
      </Flex>
      <Box mb="12">
        <SentenceTextarea />
      </Box>
    </Flex>
  );
}
