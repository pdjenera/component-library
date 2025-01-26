import type { StorybookConfig } from '@storybook/react-webpack5';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config: StorybookConfig = {
    framework: '@storybook/react-webpack5',
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)', '../**/*.styles.@(css)'],
    staticDirs: ['../src/components/assets'],

    docs: {
        autodocs: 'tag',
    },

    typescript: {
        reactDocgen: 'react-docgen-typescript'
    },

    addons: [
        '@storybook/addon-docs',
        '@storybook/addon-webpack5-compiler-babel',
        '@storybook/addon-styling-webpack',
        '@storybook/preset-scss',
        '@storybook/addon-essentials',
        '@storybook/storybook-css-modules',
        '@react-theming/storybook-addon'
    ],

    webpackFinal: async (config) => {

        config.module.rules = config.module?.rules?.filter((f) => f.test?.toString() !== '/\\.mdx$/');
  
        config.module?.rules?.push({
            test: /\.mdx$/,
            use: ['@mdx-js/loader']
        });

        config.module.rules.push({
            test: /\.css$/,
            use: [
                {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: { tailwindcss: {}, autoprefixer: {} },
                        },
                    },
                },
            ],
            include: path.resolve(__dirname, '../'),
        });

        config.resolve.extensions.push('.ts', '.tsx', '.js', 'jsx');

        return config;
    },

    core: {
        builder: {
            name: '@storybook/builder-webpack5',
            options: {
                fsCache: true,
                lazyCompilation: true,
            },
        },
    }
};

export default config;
