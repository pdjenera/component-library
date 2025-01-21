import '@testing-library/jest-dom';
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Card from './Card';

afterEach(cleanup);

describe('Card component', () => {
    it('renders title correctly', () => {
        const { getByText } = render(<Card title="Card Title" />);
        expect(getByText('Card Title')).toBeInTheDocument();
    });

    it('renders description correctly', () => {
        const { getByText } = render(<Card description="Card Description" />);
        expect(getByText('Card Description')).toBeInTheDocument();
    });

    it('renders eyebrow correctly', () => {
        const { getByText } = render(<Card eyebrow="Card Eyebrow" />);
        expect(getByText('Card Eyebrow')).toBeInTheDocument();
    });

    it('renders image correctly', () => {
        const { getByTestId } = render(<Card image={<img src="test.jpg" alt="test" />} />);
        const imageContainer = getByTestId('cardContainer').querySelector('img');
        expect(imageContainer).toHaveAttribute('src', 'test.jpg');
        expect(imageContainer).toHaveAttribute('alt', 'test');
    });

    it('handles onClick event', () => {
        const handleClick = jest.fn();
        const { getByTestId } = render(<Card onClick={handleClick}></Card>);
        const container = getByTestId('cardContainer');
        container.click();
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});