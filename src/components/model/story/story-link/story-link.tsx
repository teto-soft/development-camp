import { ChatIcon } from '@chakra-ui/icons';
import { Button, Text } from '@chakra-ui/react';

interface StoryLinkProps {
  name: string;
}

export default function StoryLink({ name }: StoryLinkProps) {
  return (
    <Button _hover={{ bg: 'white' }} w="190px">
      <ChatIcon mr="2" />
      <Text>{name}</Text>
    </Button>
  );
}
