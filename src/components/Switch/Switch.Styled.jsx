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

export const StyledLabel = styled.label.attrs(({ size, scale }) => ({
    scale: size === "small" ? (scale = 0.75) : size === "large" ? (scale = 1.5) : 1,
}))`
    ${({ disabled }) => {
        return css`
            display: flex;
            align-items: center;
            justify-content: space-between;
            cursor: pointer;
            width: ${px(50)};
            height: ${px(25)};
            background-color: rgba(0, 0, 0, 0.39);
            border-radius: ${px(100)};
            font-size: ${({ scale }) => scale + "rem"};
            position: relative;
            transition: background-color 0.2s, box-shadow 0.2s;
            ${({ disabled }) => (disabled ? disabledStyle : null)}

            &:active ${StyledThumb} {
                width: ${disabled ? `${px(21)}` : `${px(28)}`};
            }
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
            background-color: #fff;
            box-shadow: 0 ${px(2)} ${px(4)} 0 rgba(0, 35, 11, 0.2);
        `;
    }}
`;

export const StyledInput = styled.input.attrs(() => ({
    type: "checkbox",
}))`
    ${({ theme, checked, color }) => {
        const { palette } = theme;
        return css`
            height: 0;
            width: 0;
            visibility: hidden;

            &:focus + ${StyledLabel} {
                box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
            }

            &:focus:checked + ${StyledLabel} {
                box-shadow: 0 0 0 2px rgba(25, 118, 210, 0.1);
            }

            &:checked + ${StyledLabel} {
                /* background-color: ${checked ? `${color}9f` : `${palette.primary.main}9f`}; */

                ${StyledThumb} {
                    left: calc(100% - 2px);
                    transform: translateX(-100%);
                    /* background-color: ${checked ? `${color}` : `${palette.primary.main}`}; */
                }
            }
        `;
    }}
`;
