const path = require("path");

module.exports = {
    stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@storybook/preset-create-react-app",
    ],
    staticDirs: [{ from: "../src/Images/", to: "/" }],
    framework: "@storybook/react",
    core: {
        builder: "@storybook/builder-webpack5",
    },
    reactOptions: {
        fastRefresh: true,
    },

    webpackFinal: async (config, { configType }) => {
        config.module.rules = config.module.rules.map(data => {
            if (/svg\|/.test(String(data.test)))
                data.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/;
            return data;
        });

        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: "svg-sprite-loader",
                    options: {},
                },
            ],
            include: path.resolve(__dirname, "../src/Images/"),
        });

        return config;
    },

    // webpackFinal: async (config, { configType }) => {
    //     // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    //     // You can change the configuration based on that.
    //     // 'PRODUCTION' is used when building the static version of storybook.

    //     // Make whatever fine-grained changes you need

    //     config.module.rules.push({
    //         test: /\.svg$/,
    //         use: [
    //             {
    //                 loader: "svg-sprite-loader",
    //                 options: {

    //                 },
    //             },
    //         ],
    //         include: path.resolve(__dirname, '../src/Images/'),
    //     });

    //     // Return the altered config

    //     return config;
    // },
};
