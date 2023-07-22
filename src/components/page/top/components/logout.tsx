import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { supabase } from 'pages/_app';

const Logout = () => {
  const router = useRouter();
  const logout = () => {
    supabase.auth.signOut();
  };

  supabase.auth.onAuthStateChange((event, session) => {
    if (!session?.user) {
      router.push('/login');
    }
  });

  return (
    <Button colorScheme="blue" onClick={logout}>
      ログアウト
    </Button>
  );
};

export default Logout;
