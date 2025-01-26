import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Hamburger from './Hamburger';
import { IconMenu } from '@tabler/icons-react';

const meta: Meta<typeof Hamburger> = {
    title: 'Components/Hamburger',
    component: Hamburger,
    args: {
        icon: <IconMenu/>,
        menuItems: [
            {
                name: 'Home',
                clickHandler: () => console.log('Home Clicked')
            },
            {
                name: 'About',
                clickHandler: () => console.log('About Clicked')
            },
            {
                name: 'Contact',
                clickHandler: () => console.log('Contact Clicked')
            }
        ]
    },
    argTypes: {
        icon: {
            description: 'Icon to display on the button'
        },
        menuItems: {
            description: 'Menu items to display in the menu'
        },
    },
    tags: ['autodocs']
} satisfies Meta<typeof Hamburger>;

export default meta;

type Story = StoryObj<typeof Hamburger>

export const Default: Story = {
    args: {
        icon: <IconMenu/>,
        menuItems: [
            {
                name: 'Home',
                clickHandler: () => console.log('Home Clicked')
            },
            {
                name: 'About',
                clickHandler: () => console.log('About Clicked')
            },
            {
                name: 'Contact',
                clickHandler: () => console.log('Contact Clicked')
            }
        ]
    },
} satisfies Story;

export const Open: Story = {
    args: {
        icon: <IconMenu/>,
        menuItems: [
            {
                name: 'Home',
                clickHandler: () => console.log('Home Clicked')
            },
            {
                name: 'About',
                clickHandler: () => console.log('About Clicked')
            },
            {
                name: 'Contact',
                clickHandler: () => console.log('Contact Clicked')
            }
        ]
    },

} satisfies Story;

export const Closed: Story = {

} satisfies Story;