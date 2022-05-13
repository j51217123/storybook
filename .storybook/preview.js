import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../src/theme/index";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
        expanded: true,
        sort: 'requiredFirst',
    },
};

export const decorators = [
    Story => (
        <ThemeProvider theme={defaultTheme}>
            <Story />
        </ThemeProvider>
    ),
];
