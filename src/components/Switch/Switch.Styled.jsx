import styled, { css } from "styled-components";

export const StyledSwitchWrapper = styled.label`
    position: relative;
`;

export const StyledSlider = styled.span`
    display: flex;
    cursor: pointer;
    width: 50px;
    height: 25px;
    border-radius: 100px;
    background-color: #00000061;
    position: relative;
    transition: background-color 0.2s, box-shadow 0.2s;

    &:before {
        content: "";
        position: absolute;
        top: 2px;
        left: 2px;
        width: 21px;
        height: 21px;
        border-radius: 45px;
        transition: 0.2s;
        background: #fff;
        box-shadow: 0 2px 4px 0 rgba(0, 35, 11, 0.2);
    }

    &:active:before {
        width: 28px;
    }
`;

export const StyledSwitch = styled.input.attrs({
    type: "checkbox",
})`
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
        background-color: #1976D29f;
        
        &:before {
            left: calc(100% - 2px);
            transform: translateX(-100%);
            background-color: #1976D2;
        }
    }
`;
