import { Box, Flex } from '@chakra-ui/react';
import React, { useEffect } from 'react';

import AddStoryButton from '@/components/model/story/add-story/add-story';
import StoryLink from '@/components/model/story/story-link/story-link';
import UserInfo from '@/components/model/user/user-info/user-info';
import { Sentence } from '@/components/page/story/story.page';
import { useStoryStore } from '@/share/store/story-store/story.store';
import { useFetchStories } from '@/share/usecase/story/use-fetch-story';

interface StoryManagementPanelProps {
  sentences: Sentence[];
}

const items = [
  { id: 1, name: 'test1' },
  { id: 2, name: 'test2' },
];

export const fetchStories = () => {
  const stories = useStoryStore((state) => state.stories);
  const fetch = useFetchStories();

  useEffect(() => {
    fetch();
  }, []);

  return { stories };
};

export default function StoryManagementPanel({
  sentences,
}: StoryManagementPanelProps) {
  const { stories } = fetchStories();
  return (
    <Flex
      alignItems="center"
      bgColor="gray"
      flexDirection="column"
      h="100%"
      justifyContent="space-between"
      width="lg"
    >
      <Box mt="4" position="sticky" textAlign="center" top="0" w="100%">
        <AddStoryButton />
        <Flex alignItems="center" flexDirection="column" overflowY="scroll">
          {stories.map((item, index) => {
            return <StoryLink key={index} name={item.title} />;
          })}
        </Flex>
      </Box>
      <UserInfo avatarSrc={sentences[0].src} name={sentences[0].name} />
    </Flex>
  );
}
