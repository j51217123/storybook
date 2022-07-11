import styled, { css } from "styled-components";

const disabledStyle = () => {
    return css`
        cursor: not-allowed;
        pointer-events: auto;
    `;
};

export const StyledSwitchWrapper = styled.label`
    position: relative;
`;

export const StyledSlider = styled.span.attrs(({ size, scale }) => ({
    scale: size === "small" ? (scale = 0.75) : size === "large" ? (scale = 1.5) : 1,
}))`
    ${({ theme }) => {
        const { palette } = theme;
        const px = num => {
            return `${num / 14}em`;
        };

        return css`
            display: flex;
            cursor: pointer;
            width: ${px(50)};
            height: ${px(25)};
            border-radius: ${px(100)};
            background-color: #00000061;
            background-color: ${`${palette.common.black}9f`};
            position: relative;
            transition: background-color 0.2s, box-shadow 0.2s;
            font-size: ${({ scale }) => scale + "rem"};
            ${({ disabled }) => (disabled ? disabledStyle : null)};

            &:before {
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
            }

            &:active:before {
                width: ${({ disabled }) => (disabled ? `${px(21)}` : `${px(28)}`)};
            }
        `;
    }}
`;

export const StyledSwitch = styled.input.attrs(() => ({
    type: "checkbox",
}))`
    ${({ theme, color }) => {
        const { palette } = theme;

        return css`
            cursor: inherit;
            position: absolute;
            left: -9999px;
            top: -9999px;

            &:focus + span {
                box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
            }

            &:focus:checked + span {
                box-shadow: 0 0 0 2px rgba(25, 118, 210, 0.1);
            }

            &:checked + span {
                background-color: ${`${color}9f` || `${palette.primary.main}9f`};
                background-color: ${`${palette.primary.main}9f` || `${color}9f`};

                &:before {
                    left: calc(100% - 2px);
                    transform: translateX(-100%);
                    background-color: ${`${color}` || `${palette.primary.main}`};
                    background-color: ${`${palette.primary.main}` || `${color}`};
                }
            }
        `;
    }}
`;
