import React from 'react';
import { render, fireEvent } from '@testing-library/react'; 
import '@testing-library/jest-dom';
import Hamburger from './Hamburger';

describe('Hamburger Component', () => {
    const mockMenuItems = [
        { name: 'Item 1', clickHandler: jest.fn() },
        { name: 'Item 2', clickHandler: jest.fn() },
    ];

    it('renders without crashing', () => {
        const { getByTestId } = render(<Hamburger icon={<div>Icon</div>} menuItems={mockMenuItems} />);
        expect( getByTestId('hamburgerButton')).toBeInTheDocument();
    });

    it('toggles menu on button click', () => {
        const { getByTestId, queryByText } = render(<Hamburger icon={<div>Icon</div>} menuItems={mockMenuItems} />);
        const button = getByTestId('hamburgerButton');

        // Menu should be closed initially
        expect(queryByText('Item 1')).not.toBeInTheDocument();
        expect(queryByText('Item 2')).not.toBeInTheDocument();

        // Click to open menu
        fireEvent.click(button);
        expect(queryByText('Item 1')).toBeInTheDocument();
        expect(queryByText('Item 2')).toBeInTheDocument();

        // Click to close menu
        fireEvent.click(button);
        expect(queryByText('Item 1')).not.toBeInTheDocument();
        expect(queryByText('Item 2')).not.toBeInTheDocument();
    });

    it('calls clickHandler when menu item is clicked', () => {
        const { getByTestId, getByText } = render(<Hamburger icon={<div>Icon</div>} menuItems={mockMenuItems} />);
        const button = getByTestId('hamburgerButton');

        // Open menu
        fireEvent.click(button);

        // Click on first menu item
        const menuItem = getByText('Item 1');
        fireEvent.click(menuItem);
        expect(mockMenuItems[0].clickHandler).toHaveBeenCalled();

        // Click on second menu item
        const menuItem2 = getByText('Item 2');
        fireEvent.click(menuItem2);
        expect(mockMenuItems[1].clickHandler).toHaveBeenCalled();
    });
});