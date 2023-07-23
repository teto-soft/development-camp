import { ChatIcon } from '@chakra-ui/icons';
import { Button, Text } from '@chakra-ui/react';

interface StoryLinkProps {
  key: number;
  name: string;
}

export default function StoryLink({ key, name }: StoryLinkProps) {
  return (
    <Button _hover={{ bg: 'white' }} key={key} w="190px">
      <ChatIcon mr="2" />
      <Text>{name}</Text>
    </Button>
  );
}
