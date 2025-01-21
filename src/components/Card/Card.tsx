import React, { FC, ReactNode } from 'react';
import { Container, ImageContainer, TextContainer } from './Card.styled';

interface Card {
    image?: ReactNode;
    color?: 'primary' | 'secondary';
    title?: string;
    description?: string;
    eyebrow?: string;
    onClick?: () => void;
}

const Card : FC<Card> = ({
    image,
    color,
    title,
    description,
    eyebrow,
    onClick
}) => {
    return (
        <Container data-testid='cardContainer' color={color} image={image} onClick={onClick}>
            <ImageContainer image={image}> 
                {image}
            </ImageContainer>     
            <TextContainer>
                <h5>{eyebrow}</h5>
                <h2>{title}</h2>
                <p>{description}</p>
            </TextContainer>
        </Container>
    );
};

export default Card;