import styled from 'styled-components';
import { ButtonInterface } from './Button';
import { theme } from '../../types/Theme';

interface IObjectKeys {
    [key: string]: string | number;
  }

const backgroundStyle : IObjectKeys= {
    'primary': theme.colors.buttonPrimary,
    'secondary': theme.colors.buttonSecondary,
};

const size : IObjectKeys= {
    'sm': '100px',
    'lg': '200px'
};

export const Container = styled.div<ButtonInterface>`
    background-color:${(props) => backgroundStyle[props.buttonType ? props.buttonType : 'primary']};
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: row;
    height: 40px;
    margin: 0;
    padding: 4px;
    text-align: left;
    text-decoration: none;
    width: ${(props) => size[props.size ? props.size : 'sm']};
`;

export const Icon = styled.div`
    align-self: center;
`;

export const Text = styled.div`
    align-self: center;
    font-size:  ${({ theme: { fontSizes } }) => fontSizes.small};
    font-style: italic;
    font-weight: bold;
    font-family: Arial, sans-serif;
`;
