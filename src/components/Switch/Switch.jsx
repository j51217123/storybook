import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyledSwitchWrapper, StyledSlider, StyledSwitch } from "./Switch.Styled";

const Switch = props => {
    const { backgroundColor, size } = props;
    const [toggled, setToggled] = useState(false);

    const onChange = e => {
        setToggled(e.target.checked);
    };

    return (
        <>
            <StyledSwitchWrapper >
                <StyledSwitch className="StyledSwitch" onChange={onChange} backgroundColor={backgroundColor} />
                <StyledSlider className="StyledSlider" size={size}/>
            </StyledSwitchWrapper>
        </>
    );
};

Switch.propTypes = {
    className: PropTypes.string,
    backgroundColor: PropTypes.string,
    /**
     * The size of the component.
     * @default 'medium'
     */
    size: PropTypes.oneOf(["small", "medium", "large"], PropTypes.string),
};

export default Switch;
