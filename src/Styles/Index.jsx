import { colors } from "./utilities/Color";
import { spacing } from "./utilities/Spacing";
import { typography } from "./utilities/Typography";
import { palette } from './utilities/Palette'

const { fontSizes, fonts, fontWeights, letterSpacings, lineHeights } = typography;

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
