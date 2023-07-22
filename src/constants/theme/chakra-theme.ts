/* eslint-disable sort-keys-fix/sort-keys-fix */
import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';

const chakraComponentStyle = {
  Spinner: {
    baseStyle: {
      color: 'primary',
    },
  },
  Button: {
    baseStyle: {
      _focus: {
        boxShadow: 'none',
      },
    },
  },
};

export const CHAKRA_THEME = extendTheme(
  {
    colors: {
      base: 'white',
      bdBlack: '#2c1435',
      bdGray: '#F4F2F2',
      primary: '#FF7474',
      secondary: 'white',
      overlay: '#7070708f',
    },
    components: { ...chakraComponentStyle },
    config: {
      initialColorMode: 'dark',
      useSystemColorMode: false,
    },
    fonts: {
      body: `'Noto Sans JP', 'Helvetica Neue', 'Segoe UI', 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Meiryo', 'sans-serif'`,
      heading: `'Noto Sans JP', 'Helvetica Neue', 'Segoe UI', 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Meiryo', 'sans-serif'`,
    },
    styles: {
      global: {
        body: {
          color: 'bdBlack',
          display: 'flex',
          flexDirection: 'column',
        },
      },
    },
  },
  withDefaultColorScheme({
    colorScheme: 'brand',
    components: ['Button', 'table'],
  }),
);
