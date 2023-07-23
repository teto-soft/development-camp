import { AddIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';

export default function AddStoryButton() {
  return (
    <Button colorScheme="teal" mb="8">
      <AddIcon fontSize="sm" mr="4" />
      New Story
    </Button>
  );
}
