import { colors } from "./utilities/color";
import { spacing } from "./utilities/spacing";
import { typography } from "./utilities/typography";

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