import { colors } from "./color";
import { spacing } from "./spacing";
import { typography } from "./typography";

const { fontSizes, fonts, fontWeights, letterSpacings, lineHeights } = typography;
export const defaultTheme = {
    breakpoints: ["450px", "600px", "960px", "1280px", "1920px"],

    fontSizes,
    fonts,
    fontWeights,

    letterSpacings,
    lineHeights,

    colors,

    space: spacing,
};
