import styled from 'styled-components';
import { theme } from '../../types/Theme';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 15px 20px;
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    height: ${theme.sizes.headerHeight};
  
    h1 {
        display: inline-block;
        vertical-align: top;
        margin: 6px 0 6px 10px;
        font-weight: 700;
        font-size: 20px;
        line-height: 1;
    }
  
    button + button {
        margin-left: 10px;
    }
    
    .welcome {
        margin-right: 10px;
        color: #333;
        font-size: 14px;
    }
`;

export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    height: 100%;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

export const MenuContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;