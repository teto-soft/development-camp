import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';

import SentenceInput from '@/components/model/story/sentence-input/sentence-input';
import { Sentence } from '@/components/page/story/story.page';

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
      position="relative"
      w="100%"
    >
      <Flex direction="column" overflowX="auto">
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
  );
}
