module.exports = {
    webpackFinal: async (config) => {
        // Remove existing mdx rule if any (but should be none)
        config.module.rules = config.module.rules.filter((f) => f.test?.toString() !== '/\\.mdx$/');
  
        config.module.rules.push({
            test: /\.mdx$/,
            use: ['@mdx-js/loader'],
        });
  
        return config;
    },
};