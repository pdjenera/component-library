import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Card from './Card';

const meta: Meta<typeof Card> = {
    title: 'Components/Card',
    component: Card,
    args: {
        children: <div>"I'm a card"</div>
    },
    argTypes: {
        size: {
            description: 'Size of the card you\'d like to set',
            options: ['sm', 'lg'],
            table: {
                defaultValue: { summary: 'sm'}
            }
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
        size: 'sm'
    },
} satisfies Story;

export const Secondary: Story = {
    args: {
        color: 'secondary',
        size: 'sm'
    },
} satisfies Story;

export const SizeSmall: Story = {
    args: {
        size: 'sm'
    },
} satisfies Story;

export const SizeLarge: Story = {
    args: {
        size: 'lg'
    },
} satisfies Story;