import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Button from './Button';
import { theme } from '../../types/Theme';

afterEach(cleanup);
describe('Button component', () => {
    it('renders without crashing', () => {
        const handleClick = jest.fn();
        const { getByTestId } = render(<Button onClick={handleClick} />);
        expect(getByTestId('button')).toBeInTheDocument();
    });

    it('renders with text', () => {
        const handleClick = jest.fn();
        const { getByText } = render(<Button onClick={handleClick} text="Click me" />);
        expect(getByText('Click me')).toBeInTheDocument();
    });

    it('renders with icon', () => {
        const handleClick = jest.fn();
        const { getByTestId } = render(<Button onClick={handleClick} icon={<span data-testid="icon">Icon</span>} />);
        expect(getByTestId('icon')).toBeInTheDocument();
    });

    it('calls onClick when clicked', () => {
        const handleClick = jest.fn();
        const { getByTestId } = render(<Button onClick={handleClick} />);
        fireEvent.click(getByTestId('button'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('applies buttonType and size correctly', () => {
        const handleClick = jest.fn();
        const { getByTestId } = render(<Button onClick={handleClick} buttonStyle='primary' size='lg' />);
        const button = getByTestId('button');
        expect(button).toHaveStyle('background-color: ' + theme.colors.buttonPrimary);
    });
});