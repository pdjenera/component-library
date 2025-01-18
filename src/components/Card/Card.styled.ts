import styled from 'styled-components'

interface IObjectKeys {
    [key: string]: string | number;
  }

const backgroundStyle : IObjectKeys= {
    'primary': '#9879e9',
    'secondary': '#eb2d52'
};

const size : IObjectKeys= {
    'sm': '50px',
    'lg': '100px'
};

interface Props {
    color?: "primary" | "secondary";
    size?: "sm" | "lg";
}

export const Container = styled.div<Props>`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    min-height:${(props) => size[props.size ? props.size : 'sm']};
    background-color:${(props) => backgroundStyle[props.color ? props.color : 'primary']};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;