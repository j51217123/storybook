import styled, { css } from "styled-components";

export const StyledSwitchWrapper = styled.label`
    position: relative;
`;

export const StyledSlider = styled.span.attrs(({ size, fontSize }) => ({
    fontSize: size === "small" ? (fontSize = 0.75) : size === "large" ? (fontSize = 1.5) : 1,
}))`
    ${() => {
        const px = num => {
            return `${num / 14}em`;
        };

        return css`
            display: flex;
            cursor: pointer;
            width: 50px;
            height: 25px;
            width: ${px(50)};
            height: ${px(25)};
            border-radius: 100px;
            border-radius: ${px(100)};
            background-color: #00000061;
            position: relative;
            transition: background-color 0.2s, box-shadow 0.2s;
            font-size: ${({ fontSize }) => fontSize + "rem"};

            &:before {
                content: "";
                position: absolute;
                top: 2px;
                left: 2px;
                width: 21px;
                height: 21px;
                border-radius: 45px;
                top: ${px(2)};
                left: ${px(2)};
                width: ${px(21)};
                height: ${px(21)};
                border-radius: ${px(45)};
                transition: 0.2s;
                background: #fff;
                box-shadow: 0 2px 4px 0 rgba(0, 35, 11, 0.2);
                box-shadow: 0 ${px(2)} ${px(4)} 0 rgba(0, 35, 11, 0.2);
            }

            &:active:before {
                width: 28px;
                width: ${px(28)};
            }
        `;
    }}
`;

export const StyledSwitch = styled.input.attrs(() => ({
    type: "checkbox",
}))`
    ${({ theme, backgroundColor }) => {
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
                /* background-color: #1976d29f; */
                background-color: ${`${backgroundColor}9f` || `${palette.primary.main}9f`};

                &:before {
                    left: calc(100% - 2px);
                    transform: translateX(-100%);
                    /* background-color: #1976d2; */
                    background-color: ${`${backgroundColor}` || `${palette.primary.main}`};
                }
            }
        `;
    }}
`;
