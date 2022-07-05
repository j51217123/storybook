import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyledSwitchWrapper, StyledSlider, StyledSwitch } from "./Switch.Styled";

const Switch = props => {
    const [toggled, setToggled] = useState(false);

    const onChange = e => {
        setToggled(e.target.checked);
    };

    return (
        <>
            <StyledSwitchWrapper>
                <StyledSwitch onChange={onChange} />
                <StyledSlider className="slider" />
            </StyledSwitchWrapper>
        </>
    );
};

export default Switch;
