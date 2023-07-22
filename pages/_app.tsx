import '@fontsource/noto-sans-jp';

import { ChakraProvider } from '@chakra-ui/react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { CHAKRA_THEME } from 'src/constants';

export const supabase = createClientComponentClient({
  supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
});

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionContextProvider
      initialSession={pageProps.initialSession}
      supabaseClient={supabase}
    >
      <ChakraProvider theme={CHAKRA_THEME}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionContextProvider>
  );
};

export default MyApp;
