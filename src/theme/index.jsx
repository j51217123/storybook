import { colors } from "./color";
import { spacing } from "./spacing";
import { typography } from "./typography";

const { fontSizes, fonts, fontWeights, letterSpacings, lineHeights } = typography;
export const defaultTheme = {
    breakpoints: ["576px", "768px", "992px", "1200px", "1400px"],
    fontSizes,
    fonts,
    fontWeights,
    letterSpacings,
    lineHeights,
    colors,
    space: spacing,
};
