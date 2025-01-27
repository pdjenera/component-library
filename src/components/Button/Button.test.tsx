import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, cleanup, screen } from '@testing-library/react';
import Button, { ButtonInterface } from './Button';
import CustomThemeProvider from '../../types/Theme';
import { defaultTheme } from '../../types/Theme';

const handleClick = jest.fn();

const renderButton = (props: Partial<ButtonInterface> = {}) => {
    return render(
        <CustomThemeProvider theme={defaultTheme} >
            <Button onClick={handleClick} {...props} />
        </CustomThemeProvider>
    );
};

afterEach(cleanup);
describe('Button component', () => {
    it('renders without crashing', () => {
        renderButton();
        expect(screen.getByTestId('button')).toBeInTheDocument();
    });

    it('renders with text', () => {
        renderButton({text: 'Click me'});
        expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    it('renders with icon', () => {
        renderButton({icon:<span data-testid="icon">Icon</span>});
        expect(screen.getByTestId('icon')).toBeInTheDocument();
    });

    it('calls onClick when clicked', () => {
        renderButton();
        fireEvent.click(screen.getByTestId('button'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('applies buttonType and size correctly', () => {
        renderButton({buttonStyle: 'primary', size: 'lg'});
        const button = screen.getByTestId('button');
        expect(button).toHaveStyle('background-color: ' + defaultTheme.colors.buttonPrimary);
    });
});