import React, { ReactNode} from 'react';
import { ThemeProvider } from 'styled-components';

export const defaultTheme = {
    colors: {
        powderWhite: '#FFFDF9',
        buttonSecondary: '#06B49A',
        buttonPrimary: '#AFDBD2',
        cardBackground: '#F9F9F7',
        hamburgerMenuItemBackground: '#FFFDF9',
        hamburgerMenuItemHoverColor: '#e0e0de',
    },
    font: 'Helvetica Neue',
    fontSizes: {
        xsmall: '1em',
        small: '1.2em',
        medium: '2em',
        large: '3em'
    },
    sizes: {
        headerWidth: '100%',
        headerHeight: '60px'
    }
};

interface Props {
    theme: typeof defaultTheme;
    children: ReactNode;
}

const CustomThemeProvider: React.FC<Props> = ({ theme, children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default CustomThemeProvider;
