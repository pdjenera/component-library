/** @type { import('@storybook/react').Preview } */
import React from 'react';
import Theme from '../src/types/Theme';

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
            <Theme>
                <Story />
            </Theme>
        );
    },
];
