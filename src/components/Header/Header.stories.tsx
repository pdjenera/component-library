import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import inbevLogo from '../../components/assets/inbev-logo.png';

import Header from './Header';

const image = {
    src: inbevLogo,
    alt: 'my image',
};

const meta: Meta<typeof Header> = {
    title: 'Components/Header',
    component: Header,
    args: {
        onLogin: () => console.log('User logged in'),
        onLogout: () => console.log('User logged out'),
        onCreateAccount: () => console.log('User created an account'),
        icon: <img src={image.src} alt='image' />
    },
    argTypes: {
        user: {
            description: 'Data of the user contains name'
        },
        onLogin: {
            description: 'Function to call when the user logs in'
        },
        onLogout: {
            description: 'Function to call when the user logs out'
        },
        onCreateAccount: {
            description: 'Function to call when the user creates an account'
        }
    },
    tags: ['autodocs']
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof Header>

export const LoggedIn: Story = {
    args: {
        user: {
            name: 'Jane Doe',
        },
        onLogin: () =>  console.log('User logged in'),
        onLogout: () => console.log('User logged out'),
        onCreateAccount: () => console.log('User created an account')
    },
} satisfies Story;

export const LoggedOut: Story = {
    args: {
        onLogin: () =>  console.log('User logged in'),
        onLogout: () => console.log('User logged out'),
        onCreateAccount: () => console.log('User created an account')
    },
} satisfies Story;
