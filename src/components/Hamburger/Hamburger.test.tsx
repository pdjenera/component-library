import React, { ReactNode } from 'react';
import { render, fireEvent, screen } from '@testing-library/react'; 
import '@testing-library/jest-dom';
import Hamburger, { MenuItem } from './Hamburger';
import CustomThemeProvider from '../../types/Theme';
import { defaultTheme } from '../../types/Theme';

const renderHamburger = (icon: ReactNode, menuItems: Array<MenuItem>) => {
    return render(
        <CustomThemeProvider theme={defaultTheme} >
            <Hamburger icon={icon} menuItems={menuItems} />
        </CustomThemeProvider>
    );
};

describe('Hamburger Component', () => {
    const mockMenuItems = [
        { name: 'Item 1', clickHandler: jest.fn() },
        { name: 'Item 2', clickHandler: jest.fn() },
    ];

    const icon= <div>Icon</div>;

    it('renders without crashing', () => {
        renderHamburger(icon, mockMenuItems);
        expect(screen.getByTestId('hamburgerButton')).toBeInTheDocument();
    });

    it('toggles menu on button click', () => {
        renderHamburger(icon, mockMenuItems);
        const button = screen.getByTestId('hamburgerButton');

        // Menu should be closed initially
        expect(screen.queryByText('Item 1')).not.toBeInTheDocument();
        expect(screen.queryByText('Item 2')).not.toBeInTheDocument();

        // Click to open menu
        fireEvent.click(button);
        expect(screen.queryByText('Item 1')).toBeInTheDocument();
        expect(screen.queryByText('Item 2')).toBeInTheDocument();

        // Click to close menu
        fireEvent.click(button);
        expect(screen.queryByText('Item 1')).not.toBeInTheDocument();
        expect(screen.queryByText('Item 2')).not.toBeInTheDocument();
    });

    it('calls clickHandler when menu item is clicked', () => {
        renderHamburger(icon, mockMenuItems);
        const button = screen.getByTestId('hamburgerButton');

        // Open menu
        fireEvent.click(button);

        // Click on first menu item
        const menuItem = screen.getByText('Item 1');
        fireEvent.click(menuItem);
        expect(mockMenuItems[0].clickHandler).toHaveBeenCalled();

        // Click on second menu item
        const menuItem2 = screen.getByText('Item 2');
        fireEvent.click(menuItem2);
        expect(mockMenuItems[1].clickHandler).toHaveBeenCalled();
    });
});