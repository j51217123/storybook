const path = require('path');

module.exports = {
    stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@storybook/preset-create-react-app",
    ],
    staticDirs: [{ from: '../src/Images/', to: '/' }],
    framework: "@storybook/react",
    core: {
        builder: "@storybook/builder-webpack5",
    },
    reactOptions: {
        fastRefresh: true,
    },
};
