import React, { FC, ReactNode } from 'react';
import { Container } from './Card.styled';

interface Card {
    children: ReactNode;
    color: "primary" | "secondary";
    size: "sm" | "lg";
}

 const Card : FC<Card> = ({
    children,
    color,
    size
}) => {

    return (
        <Container data-testid='cardContainer' color={color} size={size}>
            {children}
        </Container>
    );
};



export default Card;