import type { StorybookConfig } from '@storybook/react-webpack5';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const config: StorybookConfig = {
  framework: '@storybook/react-webpack5',
  stories: ['../**/*.mdx', '../**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {},
  },

  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-webpack5-compiler-babel'
  ],

  webpackFinal: async (config, { configType }) => {

    config.module.rules = config.module.rules.filter((f) => f.test?.toString() !== '/\\.mdx$/');
  
    config.module.rules.push({
      test: /\.mdx$/,
      use: ['@mdx-js/loader'],
    });

    // config.module.rules.push({
    //   test: /\.(ts|tsx)$/,
    //   use: [
    //     {
    //       loader: require.resolve('ts-loader'),
    //       options: {
    //         allowTsInNodeModules: true,
    //         transpileOnly: true
    //       },
    //     },
    //     {
    //       loader: require.resolve('react-docgen-typescript-loader'),
    //     },
    //   ],
    // });

    config.resolve.extensions.push('.ts', '.tsx', '.js', 'jsx');

    // config.module.rules.push({
    //   test: /\.stories\.tsx?$/,
    //   rules: [
    //     {
    //       loader: require.resolve('@storybook/source-loader'),
    //       options: { parser: 'typescript' },
    //     },
    //   ],
    //   enforce: 'pre',
    // });

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
