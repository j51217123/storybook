import React from "react";
import { ThemeProvider } from "styled-components";
import { NormalizeResetStyle } from "../src/Styles/base/reset";
import { GlobalStyles } from "../src/Styles/base/global";
import { defaultTheme } from "../src/Styles/index";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
        expanded: true,
        sort: "requiredFirst",
    },
};

export const decorators = [
    Story => (
        <ThemeProvider theme={defaultTheme}>
            <>
                <NormalizeResetStyle />
                <GlobalStyles />
                <Story />
            </>
        </ThemeProvider>
    ),
];