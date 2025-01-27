/** @type { import('@storybook/react').Preview } */
import React from 'react';
import CustomThemeProvider, { defaultTheme } from '../src/types/Theme';

import './styles/global.scss';
import './styles/tokens.scss';

export const parameters= {  
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/i,
        },
    },
};

export const decorators = [
    Story => {
        return (
            <CustomThemeProvider theme={defaultTheme} >
                <Story />
            </CustomThemeProvider>
        );
    },
];
