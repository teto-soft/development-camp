import { Button, Flex, Textarea } from '@chakra-ui/react';
import React, { useState } from 'react';

import { useRegisterSentence } from '@/share/usecase/sentences/use-register-sentence';

function SentenceTextarea() {
  const [body, setBody] = useState('');

  const registerSentence = useRegisterSentence();

  const handleSendBody = async () => {
    if (!body.trim().length) {
      return;
    }

    await registerSentence({
      body,
      story_id: 1,
      user_id: 1,
    });

    setBody('');
  };

  return (
    <Flex alignItems="flex-end" gap="4">
      <Textarea
        border="1px solid gray"
        borderRadius="8"
        color="whiteAlpha.700"
        placeholder="Type Something..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSendBody();
          }
        }}
      />
      <Button
        aria-label="send body"
        colorScheme="teal"
        disabled={body.trim().length <= 0}
        onClick={handleSendBody}
      >
        send
      </Button>
    </Flex>
  );
}

export default SentenceTextarea;
