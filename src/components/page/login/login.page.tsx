import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from 'pages/_app';

const LoginPage = () => (
  <Auth
    appearance={{ theme: ThemeSupa }}
    providers={['google', 'twitter']}
    supabaseClient={supabase}
  />
);

export default LoginPage;
