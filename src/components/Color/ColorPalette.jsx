import * as colors from "@mui/material/colors/index";
import { StyledColorBlock, StyledColorPaletteWrapper, StyledColorPaletteContainer } from "./ColorPalette.Styled";

const ColorPalette = () => {
    const colorNameList = [];

    // const test = Object.entries(colors).reduce((data, color) => {
    //     const [name, value] = color;
    //     data.push({
    //         [name]: value,
    //     });
    //     return data;
    // }, []);
    return (
        <StyledColorPaletteWrapper>
            {Object.entries(colors).map(color => {
                const [colorName, value] = color;
                colorNameList.push(colorName);
                return (
                    <StyledColorPaletteContainer>
                        <h1>{colorName}</h1>
                        {Object.entries(value).map(([id, hex]) => {
                            return (
                                <StyledColorBlock bgColor={hex}>
                                    <div>{id}</div>
                                    <div>{hex}</div>
                                </StyledColorBlock>
                            );
                        })}
                    </StyledColorPaletteContainer>
                );
            })}
        </StyledColorPaletteWrapper>
    );
};

export default ColorPalette;
