import React from "react";
import { ThemeProvider } from "styled-components";
import { NormalizeResetStyle } from "../src/Styles/base/Reset";
import { GlobalStyles } from "../src/Styles/base/Global";
import { defaultTheme } from "../src/Styles/Index";

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
    )
];