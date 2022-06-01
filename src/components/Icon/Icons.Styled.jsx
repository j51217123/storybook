import styled, { css } from "styled-components";
// import { ReactSVG } from "react-svg";
import SVG from "react-inlinesvg";

import Icon from "./Icon";

// export const StartIcon = styled(Icon)`
//     margin-right: 8px;
// `;

// export const EndIcon = styled(Icon)`
//     margin-left: 8px;
// `;

export const StyledIcon = styled(Icon)`
    /* border: 10px solid red; */
    /* margin-right: ${marginLeft => marginLeft} */
    margin-left: ${({ iconPosition }) => (iconPosition === "end" ? 8 : 0)}px;
    margin-right: ${({ iconPosition }) => (iconPosition === "start" ? 8 : 0)}px;
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

export const StyledSVG = styled(SVG)`
    line-height: 1;
    svg {
        width: ${({ size }) => `${size}`};
        height: ${({ size }) => `${size}`};
    }
`;
