import { Button, Flex, Textarea } from '@chakra-ui/react';
import React, { useState } from 'react';

function SentenceTextarea() {
  const [body, setBody] = useState('');

  const handleSendBody = () => {
    if (!body.trim().length) {
      return;
    }
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
