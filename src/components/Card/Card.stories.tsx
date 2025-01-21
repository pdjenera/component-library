import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Card from './Card';

const image =  <img src='https://rb.gy/dauylz' alt='image' />;

const meta: Meta<typeof Card> = {
    title: 'Components/Card',
    component: Card,
    args: {
        title: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sagittis purus',
        eyebrow: 'Lorem Ipsum',
    },
    argTypes: {
        title: {
            description: 'Title of the card',
        },
        description: {
            description: 'Description of the card',
        },
        eyebrow: {
            description: 'Eyebrow of the card',
        },
        image: {
            description: 'Image to display on the card',
        },
        color: {
            description: 'Color of the card you\'d like to set',
            options: ['primary', 'secondary'],
            table: {
                defaultValue: { summary: 'primary'}
            }
        },
        
    },
    tags: ['autodocs']
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof Card>

export type color = 'primary' | 'secondary';

export const Primary: Story = {
    args: {
        color: 'primary',
    },
} satisfies Story;

export const Secondary: Story = {
    args: {
        color: 'secondary',
    },
} satisfies Story;

export const NoImage: Story = {
    args: {},
} satisfies Story;

export const Image: Story = {
    args: {
        image: image
    },
} satisfies Story;