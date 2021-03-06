const path = require("path");

module.exports = {
    stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@react-theming/storybook-addon",
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
    webpackFinal: async config => {
        config.resolve.alias["@mui/styled-engine"] = path.resolve(__dirname, "../node_modules/@mui/styled-engine-sc");  
        // https://github.com/mui/material-ui/issues/27846
        // https://github.com/mui/material-ui/issues/29742
        // https://github.com/storybookjs/storybook/issues/16099
        return config;
    },

    // webpackFinal: async (config, { configType }) => {
    //     config.module.rules = config.module.rules.map(rule => {
    //         if (rule.test && rule.test.toString().includes("svg")) {
    //             const test = rule.test.toString().replace("svg|", "").replace(/\//g, "");
    //             return { ...rule, test: new RegExp(test) };
    //         } else {
    //             return rule;
    //         }
    //     });

    //     config.module.rules.push({
    //         test: /\.svg$/,
    //         use: [
    //             {
    //                 loader: "svg-sprite-loader",
    //                 options: {
    //                     // spriteFilename: () => `svg-sprite.svg?v=[contenthash]`,
    //                     extract: true,
    //                     publicPath: '/',
    //                 },
    //             },
    //         ],
    //         include: path.resolve(__dirname, "../src/assets/icon"),
    //     });
    //     return config;
    // },
};
