import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Header, { HeaderInterface } from './Header';

const mockLogin = jest.fn();
const mockLogout = jest.fn();
const mockCreateAccount = jest.fn();

const renderHeader = (props: Partial<HeaderInterface> = {}) => {
    const defaultProps: HeaderInterface = {
        onLogin: mockLogin,
        onLogout: mockLogout,
        onCreateAccount: mockCreateAccount,
    };
    return render(<Header {...defaultProps} {...props} />);
};

describe('Header', () => {
    test('renders Header component', () => {
        renderHeader();
        expect(screen.getByTestId('header')).toBeInTheDocument();
    });

    test('renders login and sign up buttons when user is not logged in', () => {
        renderHeader();
        expect(screen.getByText('Log in')).toBeInTheDocument();
        expect(screen.getByText('Sign up')).toBeInTheDocument();
    });

    test('calls onLogin when login button is clicked', () => {
        renderHeader();
        fireEvent.click(screen.getByText('Log in'));
        expect(mockLogin).toHaveBeenCalled();
    });

    test('calls onCreateAccount when sign up button is clicked', () => {
        renderHeader();
        fireEvent.click(screen.getByText('Sign up'));
        expect(mockCreateAccount).toHaveBeenCalled();
    });

    test('renders welcome message and logout button when user is logged in', () => {
        const user = { name: 'John Doe' };
        renderHeader({ user });
        expect(screen.getByText(`${user.name}`)).toBeInTheDocument();
        expect(screen.getByText('Log out')).toBeInTheDocument();
    });

    test('calls onLogout when logout button is clicked', () => {
        const user = { name: 'John Doe' };
        renderHeader({ user });
        fireEvent.click(screen.getByText('Log out'));
        expect(mockLogout).toHaveBeenCalled();
    });
});