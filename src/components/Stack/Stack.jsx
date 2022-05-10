import PropTypes from "prop-types";
import { StyledStack } from "./Stack.Styled";

const Stack = props => {
    const { children, spacing, direction } = props;

    return (
        <StyledStack spacing={spacing} direction={direction}>
            {children}
        </StyledStack>
    );
};

Stack.propTypes = {
    /**
     * Defines the space between immediate children.
     * @default 0
     */
    spacing: PropTypes.number,

    /**
     * Defines the `flex-direction` style property.
     * It is applied for all screen sizes.
     * @default 'row'
     */
    direction: PropTypes.oneOfType([
        PropTypes.oneOf(["row", "row-reverse", "column", "column-reverse"]),
        PropTypes.string,
    ]),
};

export default Stack;
