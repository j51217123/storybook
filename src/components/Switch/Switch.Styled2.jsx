import styled, { css } from "styled-components";

// const px = num => {
//     return `${num / 14}em`;
// };

// const disabledStyle = () => {
//     return css`
//         cursor: not-allowed;
//         pointer-events: auto;
//         background-color: rgba(0, 0, 0, 0.12);
//     `;
// };

export const StyledLabel = styled.label`
    ${( checked ) => {
        console.log(checked)
        return css`
            display: flex;
            align-items: center;
            justify-content: space-between;
            cursor: pointer;
            width: 100px;
            height: 50px;
            background: grey;
            background: ${checked ? `black` : `grey`};
            border-radius: 100px;
            position: relative;
            transition: background-color 0.2s;

            &:active ${StyledThumb} {
                width: 60px;
            }
        `;
    }}
`;

export const StyledThumb = styled.span`
    ${() => {
        return css`
            content: "";
            position: absolute;
            top: 2px;
            left: 2px;
            width: 45px;
            height: 45px;
            border-radius: 45px;
            transition: 0.2s;
            background: #fff;
            box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
        `;
    }}
`;

export const StyledInput = styled.input.attrs(() => ({
    type: "checkbox",
}))`
    ${({ theme, color }) => {
        return css`
            height: 0;
            width: 0;
            visibility: hidden;

            &:checked + ${StyledLabel} {
                ${StyledThumb} {
                    left: calc(100% - 2px);
                    transform: translateX(-100%);
                    background-color: lightblue;
                }
            }
        `;
    }}
`;
