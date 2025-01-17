/** @type { import('@storybook/react').Preview } */

import { Preview } from '@storybook/react';
 
import './styles/global.scss';
import './styles/tokens.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
