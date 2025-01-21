import React, { ReactNode} from 'react';
import { ThemeProvider } from 'styled-components';

export const theme = {
    colors: {
        powderWhite: '#FFFDF9',
        buttonSecondary: '#06B49A',
        buttonPrimary: '#AFDBD2',
        cardBackground: '#F9F9F7'
    },
    font: 'Helvetica Neue',
    fontSizes: {
        small: '1em',
        medium: '2em',
        large: '3em'
    }
};

interface Props {
    children: ReactNode;
}

const Theme: React.FC<Props> = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
