import { Box, Button, Input, Text, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { supabase } from 'pages/_app';
import React from 'react';

import { BaseFormContainer } from '@/components/ui';
import { useUserApi } from '@/share/usecase/user';

const RegisterPage = () => {
  const [name, setName] = React.useState<string>('');
  const router = useRouter();
  const userApi = useUserApi();

  const handleRegister = async () => {
    try {
      const { data } = await supabase.auth.getUser();
      const result = await userApi.create({
        email: data?.user?.email,
        name: name,
      });
      router.push('/story');
    } catch (error) {
      alert(`登録に失敗しました。`);
      console.error(error);
    }
  };
  return (
    <VStack align="center" justify="center" mx="auto" px="20%" py="96px">
      <Box mb="24px" w="100%">
        <Text fontSize="4xl">ユーザー名登録</Text>
      </Box>
      <Box mb="24px" w="100%">
        <BaseFormContainer isInvalid={false} isRequired={true} label="name">
          <Input size="lg" onChange={(e) => setName(e.target.value)} />
        </BaseFormContainer>
      </Box>
      <Box mb="24px" w="100%">
        <Button colorScheme="blue" size="lg" w="100%" onClick={handleRegister}>
          登録
        </Button>
      </Box>
    </VStack>
  );
};

export default RegisterPage;
