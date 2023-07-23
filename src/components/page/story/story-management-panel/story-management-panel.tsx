import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

import AddStoryButton from '@/components/model/story/add-story/add-story';
import StoryLink from '@/components/model/story/story-link/story-link';
import { Sentence } from '@/share/types/model/sentence.model';

interface StoryManagementPanelProps {
  sentences: Sentence[];
}

const items = [
  { id: 1, name: 'test1' },
  { id: 2, name: 'test2' },
];

export default function StoryManagementPanel({
  sentences,
}: StoryManagementPanelProps) {
  return (
    <Flex
      alignItems="center"
      bgColor="gray"
      flexDirection="column"
      h="100%"
      justifyContent="space-between"
      width="lg"
    >
      <Box mt="4" textAlign="center">
        <AddStoryButton />
        <Flex alignItems="center" flexDirection="column">
          {items.map((item, index) => {
            return <StoryLink key={index} name={item.name} />;
          })}
        </Flex>
      </Box>
      {/*<UserInfo avatarSrc={sentences[0].id} name={sentences[0].user_id} />*/}
    </Flex>
  );
}
