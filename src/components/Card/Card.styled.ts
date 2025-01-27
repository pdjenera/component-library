import React from 'react';
import styled from 'styled-components';

interface IObjectKeys {
    [key: string]: string | number;
}

const height : IObjectKeys= {
    'sm': '75px',
    'lg': '250px'
};

const imageHeight : IObjectKeys= {
    'sm': '0px',
    'lg': '175px'
};

const width : IObjectKeys= {
    'sm': '200px',
    'lg': '250px'
};

interface Props {
    image?: React.ReactNode;
    size?: 'sm' | 'lg';
}

export const Container = styled.div<Props>`
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    border-radius: 4px;
    min-height:${(props) => height[props.image ? 'lg' : 'sm']};
    max-width:${(props) => width[props.image ? 'lg' : 'sm']};
    background-color:${props => props.theme.colors.cardBackground};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const ImageContainer = styled.div<Props>`
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
    height:${(props) => imageHeight[props.image ? 'lg' : 'sm']};
    width: 100%;
    img {
        max-height: 100%;
        max-width: 100%;
        object-fit: height;
        display: block;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 8px;
    h5 {
        margin: 0px 4px 0px 4px;
        font-family: ${props => props.theme.font};
    }
    h2 {
        margin: 4px;
        font-family: ${props => props.theme.font};
    }
    p {
        margin: 0px 4px 0px 4px;
        font-family: ${props => props.theme.font};
    }
`;