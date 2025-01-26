import styled from 'styled-components';
import { theme } from '../../types/Theme';

export const HamburgerMenu = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 100%;
    cursor: pointer;
`;

export const HamburgerMenuContainer = styled.div`
    display: block;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    top: ${theme.sizes.headerHeight};
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const HamburgerMenuItem = styled.div`
    width: 100px;
    height: 50px;
    line-height: 50px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
    display: block;
    padding: 0 10px;
    font-family: ${theme.font};
    font-size: ${theme.fontSizes.small};
    background-color: ${theme.colors.hamburgerMenuItemBackground};
    &:hover {
        background-color: ${theme.colors.hamburgerMenuItemHoverColor};
    }
`;

export const HamburgerLine = styled.div`
    width: 100%;
    height: 1px;

    background-color: #333;
    border-radius: 2px;
    transition: all 0.3s ease;

    &:nth-child(1) {
        transform-origin: top left;
    }

    &:nth-child(3) {
        transform-origin: bottom left;
    }

    &.open:nth-child(1) {
        transform: rotate(45deg);
    }

    &.open:nth-child(2) {
        opacity: 0;
    }

    &.open:nth-child(3) {
        transform: rotate(-45deg);
    }
`;

export const HamburgerButton = styled.div`
    display: block;
    background-color: #fff;
    position: absolute;
    height: 4px;
    width: 30px;
    transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
    border-radius: 2px;
`;
