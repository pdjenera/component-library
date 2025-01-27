import '@testing-library/jest-dom';
import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import Card, { CardInterface } from './Card';
import CustomThemeProvider from '../../types/Theme';
import { defaultTheme } from '../../types/Theme';

const renderCard = (props: Partial<CardInterface> = {}) => {
    return render(
        <CustomThemeProvider theme={defaultTheme} >
            <Card {...props} />
        </CustomThemeProvider>
    );
};

afterEach(cleanup);
describe('Card component', () => {
    it('renders title correctly', () => {
        renderCard({title:'Card Title'});
        expect(screen.getByText('Card Title')).toBeInTheDocument();
    });

    it('renders description correctly', () => {
        renderCard({description:'Card Description'});
        expect(screen.getByText('Card Description')).toBeInTheDocument();
    });

    it('renders eyebrow correctly', () => {
        renderCard({eyebrow:'Card Eyebrow'});
        expect(screen.getByText('Card Eyebrow')).toBeInTheDocument();
    });

    it('renders image correctly', () => {
        renderCard({image:<img src="test.jpg" alt="test" />});
        const imageContainer = screen.getByTestId('cardContainer').querySelector('img');
        expect(imageContainer).toHaveAttribute('src', 'test.jpg');
        expect(imageContainer).toHaveAttribute('alt', 'test');
    });

    it('handles onClick event', () => {
        const handleClick = jest.fn();
        renderCard({onClick:handleClick});
        const container = screen.getByTestId('cardContainer');
        container.click();
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});