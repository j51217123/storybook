import styled, { css } from "styled-components";
import { ReactSVG } from "react-svg";

export const StartIcon = styled.span`
    margin-right: 8px;
`

export const EndIcon = styled.span`
    margin-left: 8px;
`

export const StyledIcon = styled(ReactSVG)`
    svg {
        fill: black;
        ${({ size }) =>
            size &&
            css`
                width: ${size};
                height: ${size};
            `}
        ${({ transform }) =>
            transform &&
            css`
                transform: ${transform};
            `}
    path {
            ${({ color }) =>
                color &&
                css`
                    fill: ${color};
                `}
        }
    }
`;
