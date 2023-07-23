import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

import AddStoryButton from '@/components/model/story/add-story/add-story';
import StoryLink from '@/components/model/story/story-link/story-link';
import UserInfo from '@/components/model/user/user-info/user-info';
import { User } from '@/share/types';

interface StoryManagementPanelProps {
  user: User | null;
}

const items = [
  { id: 1, name: 'test1' },
  { id: 2, name: 'test2' },
];

export default function StoryManagementPanel({
  user,
}: StoryManagementPanelProps) {
  return (
    <Flex
      alignItems="center"
      bgColor="gray"
      flexDirection="column"
      h="100%"
      justifyContent="space-between"
      minW="64"
    >
      <Box mt="4" textAlign="center">
        <AddStoryButton />
        <Flex alignItems="center" flexDirection="column">
          {items.map((item, index) => {
            return <StoryLink key={index} name={item.name} />;
          })}
        </Flex>
      </Box>
      <UserInfo
        avatarSrc="https://avatars.dicebear.com/api/avataaars/1.svg"
        name={user?.name ?? ''}
      />
    </Flex>
  );
}
