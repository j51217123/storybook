import { colors } from "./utilities/Color";
import { theme } from './utilities/Palette';
import { spacing } from "./utilities/Spacing";
import { typography } from "./utilities/Typography";

const { fontSizes, fonts, fontWeights, letterSpacings, lineHeights } = typography;
const { palette } = theme

export const defaultTheme = {
    breakpoints: ["576px", "768px", "992px", "1200px", "1400px"],
    fontSizes,
    fonts,
    fontWeights,
    letterSpacings,
    lineHeights,
    colors,
    palette,
    space: spacing,
};
