import { Global, MantineTheme } from '@mantine/core';
import React from 'react';

const GlobalStyles = () => (
  <Global
    styles={({ colors, colorScheme, fn, white }: MantineTheme) => ({
      '*, *::before, *::after': {
        boxSizing: 'border-box',
        margin: 0,
      },

      body: {
        ...fn.fontStyles(),
      },

      'body, .bg': {
        backgroundColor: colorScheme === 'dark' ? colors.darkBlue[1] : white,
        color: colorScheme === 'dark' ? white : colors.darkBlue[2],
      },

      '.element-bg': {
        backgroundColor: (colorScheme === 'dark' && colors.darkBlue[0]) || white,
      },
      '.element-color, .element-bg': {
        color: colorScheme === 'dark' ? white : colors.darkBlue[2],
        '&::placeholder': {
          color: colorScheme === 'dark' ? white : colors.darkBlue[2],
        },
      },
    })}
  />
);

export default GlobalStyles;
