import PropTypes from "prop-types";
import CircularProgress from "../CircularProgress/CircularProgress";
import { StyledIcon } from "./Icons.Styled";

const Icon = props => {
    const { iconPosition, iconName, iconColor, color, size, className, isLoading } = props;
    console.log(iconName,'iconName');
    return isLoading ? (
        <CircularProgress size={16} sx={{ color, iconColor }} iconPosition={iconPosition}/>
    ) : (
        iconName && (
            <StyledIcon
                title={iconName}
                className={className}
                src={`/${iconName}.svg`}
                width={size}
                height={size}
                fill={iconColor || color}
                description={`${iconName} Icon`}
                preProcessor={code => code.replace('fill="#FFF"', 'fill="currentcolor"')}
                iconPosition={iconPosition}
            />
        )
    );
};

Icon.defaultProps = {
    title: "",
    className: "",
    src: "",
    size: "16px",
    color: "inherit",
    iconColor: "inherit",
};

Icon.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
    src: PropTypes.string,
    size: PropTypes.string,
};

export default Icon;
