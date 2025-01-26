import React, { FC } from 'react';
import { Container, IconContainer, MenuContainer } from './Header.styled';
import Hamburger from '../Hamburger/Hamburger';
import { IconMenu } from '@tabler/icons-react';

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
                <MenuContainer>
                    {user ? (
                        <>
                            <span className="welcome">
                Welcome, <b>{user.name}</b>!
                            </span>
                            <Hamburger 
                                icon={<IconMenu/>} 
                                menuItems={[
                                    { name: 'Profile', clickHandler: () => {} },
                                    { name: 'Settings', clickHandler: () => {} },
                                    { name: 'Log out', clickHandler: onLogout }
                                ]}
                            />
                        </>
                    ) : (
                        <Hamburger 
                            icon={<IconMenu/>} 
                            menuItems={[
                                { name: 'Sign up', clickHandler: onCreateAccount },
                                { name: 'Log in', clickHandler: onLogin }
                            ]}
                        />
                    )}
                </MenuContainer>
            </Container>
        </header>
    );
};

export default Header;
