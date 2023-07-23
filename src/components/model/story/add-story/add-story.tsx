import { AddIcon } from '@chakra-ui/icons';
import { Button, Flex, Input, VStack } from '@chakra-ui/react';
import { useState } from 'react';

import { useStoryApi } from '@/share/usecase/story';
import { useFetchStories } from '@/share/usecase/story/use-fetch-story';

export default function AddStoryButton() {
  // 入力欄の状態管理
  const [showInput, setShowInput] = useState<boolean>(false);
  const [storyName, setStoryName] = useState<string | undefined>('');
  const storyApi = useStoryApi();
  const fetch = useFetchStories();

  const handleButtonClick = () => {
    setShowInput(!showInput);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStoryName(e.target.value);
  };

  const handleRegistration = async () => {
    try {
      await storyApi.create({
        title: storyName,
      });
      fetch();
      setStoryName('');
    } catch (error) {
      alert(`登録に失敗しました。`);
      console.error(error);
    }
    handleButtonClick();
  };
  return (
    <VStack>
      {showInput ? (
        <Flex mb="32px">
          <Input type="text" value={storyName} onChange={handleInputChange} />
          <Button colorScheme="teal" ml="5px" onClick={handleRegistration}>
            enter
          </Button>
        </Flex>
      ) : (
        <Button colorScheme="teal" mb="8" onClick={handleButtonClick}>
          <AddIcon fontSize="sm" mr="4" />
          New Story
        </Button>
      )}
    </VStack>
  );
}
