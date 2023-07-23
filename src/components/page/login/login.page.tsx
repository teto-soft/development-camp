import { Box } from '@chakra-ui/react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from 'pages/_app';

const LoginPage = () => (
  <Box mx="35%" pt="10%">
    <Auth
      appearance={{ theme: ThemeSupa }}
      providers={[]}
      supabaseClient={supabase}
    />
  </Box>
);

export default LoginPage;
