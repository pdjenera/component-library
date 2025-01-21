import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Button from './Button';
import { IconLogin } from '@tabler/icons-react';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    args: {
        onClick: () => console.log('Button Clicked'),
        icon: <IconLogin />,
        text: 'Click Me',
        buttonStyle: 'primary',
        size: 'sm'
    },
    argTypes: {
        onClick: {
            description: 'Function to call when the button is clicked'
        },
        icon: {
            description: 'Icon to display on the button'
        },
        text: {
            description: 'Text to display on the button'
        },
        buttonStyle: {
            description: 'Color of the card you\'d like to set',
            options: ['primary', 'secondary'],
            table: {
                defaultValue: { summary: 'primary'}
            }
        },
        size: {
            description: 'Size of the card you\'d like to set',
            options: ['sm', 'lg'],
            table: {
                defaultValue: { summary: 'sm'}
            }
        },
        
    },
    tags: ['autodocs']
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>

export const Primary: Story = {
    args: {
        onClick: () => console.log('Button Clicked'),
        icon: <IconLogin />,
        text: 'Click Me',
        buttonStyle: 'primary',
        size: 'sm'
    },
} satisfies Story;

export const Secondary: Story = {
    args: {
        onClick: () => console.log('Button Clicked'),
        icon: <IconLogin />,
        text: 'Click Me Secondary',
        buttonStyle: 'secondary',
        size: 'lg'
    },
} satisfies Story;