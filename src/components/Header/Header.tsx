import React, { FC } from 'react';
import { Container, IconContainer } from './Header.styled';
import Button from '../Button/Button';

export interface User {
    name: string;
}

export interface HeaderInterface {
    user?: User;
    onLogin: () => void;
    onLogout: () => void;
    onCreateAccount: () => void
    icon?: React.ReactNode;
}

const Header : FC<HeaderInterface> = ({
    user,
    onLogin,
    onLogout,
    onCreateAccount,
    icon
}) => {
    return (
        <header>
            <Container data-testid='header'>
                <IconContainer>
                    {icon}
                </IconContainer>
                <div>
                    {user ? (
                        <>
                            <span className="welcome">
                Welcome, <b>{user.name}</b>!
                            </span>
                            <Button size="sm" onClick={onLogout} text="Log out" />
                        </>
                    ) : (
                        <>
                            <Button size="sm" onClick={onLogin} text="Log in" />
                            <Button buttonStyle='primary' size="sm" onClick={onCreateAccount} text="Sign up" />
                        </>
                    )}
                </div>
            </Container>
        </header>
    );
};

export default Header;
