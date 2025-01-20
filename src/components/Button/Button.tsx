import React, { FC, ReactNode } from 'react';
import { Container, Icon, Text } from './Button.styled';

export interface ButtonInterface {
    onClick: () => void;
    icon?: ReactNode;
    text?: string;
    buttonType?: 'primary' | 'secondary' | 'error' | 'warning';
    size?: 'sm' | 'lg';
}

const Button : FC<ButtonInterface> = ({
    onClick,
    icon,
    text,
    buttonType,
    size
}) => {
    return (
        <Container data-testid='button' buttonType={buttonType} size={size} onClick={() => onClick()}>
            <Icon>
                {icon}
            </Icon> 
            <Text>
                {text}
            </Text>
        </Container>
    );
};

export default Button;