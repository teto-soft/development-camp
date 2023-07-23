import { useRouter } from 'next/router';
import { supabase } from 'pages/_app';

import LoginPage from '@/components/page/login/login.page';

const Login = () => {
  const router = useRouter();

  supabase.auth.onAuthStateChange((event, session) => {
    if (session?.user) {
      router.push('/');
    }
  });

  return <LoginPage />;
};

export default Login;
