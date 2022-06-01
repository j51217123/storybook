import PropTypes from "prop-types";
import CircularProgress from "../CircularProgress/CircularProgress";

import { StyledSVG, StyledTestIcon } from "./Icons.Styled";

const Icon = props => {
    const { iconName , name, iconColor, color, size, className, isDisabled, isLoading } = props;

    return isLoading ? (
        <CircularProgress size={16} sx={{ color: `${color || iconColor}` }} />
    ) : (
        // <StyledIcon
        //     src={`/${name}.svg`}
        //     className={className}
        //     iconColor={iconColor}
        //     color={color}
        //     size={size}
        //     transform={transform}
        //     wrapper="div"
        // />
        <StyledSVG
            baseURL="/home"
            className={className}
            cacheRequests={true}
            description={`${name} Icon`}
            loader={<span>Loading...</span>} // loading 中
            onError={error => console.log(error.message, "error.message")}
            onLoad={(src, hasCache) => console.log(src, hasCache, "src, hasCache")}
            preProcessor={code => code.replace('fill="#FFF"', 'fill="currentcolor"')}
            fill={color}
            width={size}
            height={size}
            src={`/${name}.svg`}
            title={name}
            uniqueHash="a1f8d1"
            uniquifyIDs={true}
        />
    );
};

Icon.defaultProps = {
    size: "16px",
    // color: '#000101',
    className: "",
};

Icon.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
    src: PropTypes.string,
    size: PropTypes.number,
};

export default Icon;
