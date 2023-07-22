import '@fontsource/noto-sans-jp';

import { ChakraProvider } from '@chakra-ui/react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { useState } from 'react';
import { CHAKRA_THEME } from 'src/constants';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  const [supabase] = useState(() =>
    createClientComponentClient({
      supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
    }),
  );

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
