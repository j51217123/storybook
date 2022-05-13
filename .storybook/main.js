const path = require('path');

module.exports = {
    stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@storybook/preset-create-react-app",
    ],
    framework: "@storybook/react",
    core: {
        builder: "@storybook/builder-webpack5",
    },
    reactOptions: {
        fastRefresh: true,
    },
    webpackFinal: async (config, { configType }) => {
        // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
        // You can change the configuration based on that.
        // 'PRODUCTION' is used when building the static version of storybook.
        // Make whatever fine-grained changes you need
        config.module.rules.push({
            test: /\.(png|jp(e*)g|svg|gif)$/,
            use: [
              // 配置 loader (第一步)
              {
                loader: 'file-loader',
                options: {
                  // 配置 name 屬性 (第二步)
                  name: '[name].[ext]',
                },
              },
            ],
            // use: "file-loader",
            include: path.resolve(__dirname, "../src/Icon"),
        });

        // Return the altered config
        console.log(config.module.rules)
        return config;
    },
};
