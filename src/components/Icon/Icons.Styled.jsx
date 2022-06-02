import styled, { css } from "styled-components";
// import { ReactSVG } from "react-svg";
import SVG from "react-inlinesvg";

// export const StyledIcon = styled(SVG)`
//     line-height: 1;
//     margin-left: ${({ iconPosition }) => (iconPosition === "end" ? 8 : 0) + "px"};
//     margin-right: ${({ iconPosition }) => (iconPosition === "start" ? 8 : 0) + "px"};

//     svg {
//         width: ${({ size }) => `${size}`};
//         height: ${({ size }) => `${size}`};
//         fill: ${({ theme }) => {
//             console.log("check theme:", theme);
//         }};
//     }
// `;

export const StyledIcon = styled(SVG)`
    ${({ theme, color }) => {
        const { palette } = theme;
        return css`
            line-height: 1;
            margin-left: ${({ iconPosition }) => (iconPosition === "end" ? 8 : 0) + "px"};
            margin-right: ${({ iconPosition }) => (iconPosition === "start" ? 8 : 0) + "px"};

            svg {
                width: ${({ size }) => size};
                height: ${({ size }) => size};
                fill: ${color || palette.primary.main};
            }
        `;
    }}
`;

// export const StyledIcon = styled(ReactSVG)`
//     line-height: 1;

//     svg {
//         width: ${({ size }) => `${size}`};
//         height: ${({ size }) => `${size}`};
//         /* fill: ${({ iconColor, theme }) => (iconColor ? iconColor : `${theme.colors.blue700}`)}; */
//         /* fill: ${({ iconColor, theme }) => {
//             console.log(theme, "theme");
//             return iconColor ? iconColor : `${theme.colors.blue700}`;
//         }}; */
//         fill: ${({ isDisabled, iconColor, theme }) => {
//             console.log(theme, "theme");
//             return isDisabled ? `red` : iconColor;
//         }};

//         ${({ size }) =>
//             size &&
//             css`
//                 width: ${size};
//                 height: ${size};
//             `}
//         ${({ transform }) =>
//             transform &&
//             css`
//                 transform: ${transform};
//             `}
//     path {
//             ${({ color }) =>
//                 color &&
//                 css`
//                     fill: ${({ color, theme }) => (color ? color : `${theme.colors.blue700}`)};
//                     /* fill: ${({ color, theme }) => (color ? color : `red`)}; */
//                 `}
//         }
//     }
// `;
