import {extendTheme} from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      '1000': '#0a0b10',
    },
  },
  fonts: {
    header: 'Roboto',
    body: 'Roboto',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'gray.50',
      },
    },
  },
});
