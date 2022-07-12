import styled, { css } from "styled-components";

const px = num => {
    return `${num / 14}em`;
};

const disabledStyle = () => {
    return css`
        cursor: not-allowed;
        pointer-events: auto;
        background-color: rgba(0, 0, 0, 0.12);
    `;
};

export const StyledSwitchContainer = styled.label`
    position: relative;
`;

export const StyledSlider = styled.div.attrs(({ size, scale }) => ({
    scale: size === "small" ? (scale = 0.75) : size === "large" ? (scale = 1.5) : 1,
}))`
    ${() => {
        return css`
            display: flex;
            align-items: center;
            cursor: pointer;
            width: ${px(50)};
            height: ${px(25)};
            border-radius: ${px(100)};
            background-color: rgba(0, 0, 0, 0.39);
            position: relative;
            transition: background-color 0.2s, box-shadow 0.2s;
            font-size: ${({ scale }) => scale + "rem"};
            ${({ disabled }) => (disabled ? disabledStyle : null)};
        `;
    }}
`;

export const StyledThumb = styled.span`
    ${() => {
        return css`
            content: "";
            position: absolute;
            top: ${px(2)};
            left: ${px(2)};
            width: ${px(21)};
            height: ${px(21)};
            border-radius: ${px(45)};
            transition: 0.2s;
            background: #fff;
            box-shadow: 0 ${px(2)} ${px(4)} 0 rgba(0, 35, 11, 0.2);
            z-index: 2;

            &:active {
                width: ${({ disabled }) => (disabled ? `${px(21)}` : `${px(28)}`)};
            }
        `;
    }}
`;

export const StyledLabel = styled.span`
    ${() => {
        return css`
            position: absolute;
            width: max-content;
        `;
    }}
`;

export const StyledSwitch = styled.input.attrs(() => ({
    type: "checkbox",
}))`
    ${({ theme, color }) => {
        const { palette } = theme;
        console.log(color, "color");
        return css`
            cursor: inherit;
            position: absolute;
            left: -9999px;
            top: -9999px;

            &:focus + ${StyledSlider} {
                box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
            }

            &:focus:checked + ${StyledSlider} {
                box-shadow: 0 0 0 2px rgba(25, 118, 210, 0.1);
            }

            &:checked + ${StyledSlider} {
                background-color: ${`${color}9f` || `${palette.primary.main}9f`};
                /* background-color: ${`${palette.primary.main}9f` || `${color}9f`}; */

                ${StyledThumb} {
                    left: calc(100% - 2px);
                    transform: translateX(-100%);
                    background-color: ${`${color}` || `${palette.primary.main}`};
                    /* background-color: ${`${palette.primary.main}` || `${color}`}; */
                }
            }
        `;
    }}
`;
