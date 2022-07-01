import * as colors from "@mui/material/colors/index";
import {
    StyledColorBlockWrapper,
    StyledH1,
    StyledColorBlock,
    StyledColorPaletteWrapper,
    StyledColorPaletteContainer,
} from "./ColorPalette.Styled";

const ColorPalette = () => {
    const colorNameList = [];

    return (
        <StyledColorPaletteWrapper>
            {Object.entries(colors).map(color => {
                const [colorName, colorHexs] = color;
                colorNameList.push(colorName);
                return (
                    <StyledColorPaletteContainer>
                        <StyledH1>{colorName}</StyledH1>
                        <StyledColorBlockWrapper>
                            {Object.entries(colorHexs).map(([id, hex]) => {
                                return (
                                    <StyledColorBlock bgColor={hex}>
                                        <div>{id}</div>
                                        <div>{hex}</div>
                                    </StyledColorBlock>
                                );
                            })}
                        </StyledColorBlockWrapper>
                    </StyledColorPaletteContainer>
                );
            })}
        </StyledColorPaletteWrapper>
    );
};

export default ColorPalette;
