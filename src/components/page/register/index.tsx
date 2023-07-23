import { Box, Button, Input, Text, VStack } from '@chakra-ui/react';
import React from 'react';

import { BaseFormContainer } from '@/components/ui';

const RegisterPage = () => {
  return (
    <VStack align="center" justify="center" mx="auto" px="20%" py="96px">
      <Box mb="24px" w="100%">
        <Text fontSize="4xl">ユーザー名登録</Text>
      </Box>
      <Box mb="24px" w="100%">
        <BaseFormContainer isInvalid={false} isRequired={true} label="name">
          <Input size="lg" />
        </BaseFormContainer>
      </Box>
      <Box mb="24px" w="100%">
        <Button colorScheme="blue" size="lg" w="100%">
          登録
        </Button>
      </Box>
    </VStack>
  );
};

export default RegisterPage;
