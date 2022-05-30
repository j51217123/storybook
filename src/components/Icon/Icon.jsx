import PropTypes from "prop-types";
import CircularProgress from "../CircularProgress/CircularProgress";

import { StyledIcon } from "./Icons.Styled";

const Icon = props => {
    const { iconColor, color, size, name, className, transform, isLoading } = props;
    return isLoading ? (
        <CircularProgress size={16} sx={{ color: `${iconColor}` }} />
    ) : (
        <StyledIcon
            src={`/${name}.svg`}
            className={className}
            iconColor={iconColor}
            color={color}
            size={size}
            transform={transform}
            wrapper="span"
        />
    );
    // <StyledTestIcon
    //     baseURL="/home"
    //     cacheRequests={true}
    //     description={`${name} Icon`}
    //     loader={<span>Loading...</span>} // loading 中
    //     onError={error => console.log(error.message,'error.message')}
    //     onLoad={(src, hasCache) => console.log(src, hasCache,'src, hasCache')}
    //     // preProcessor={code => console.log(code.replace(/fill=".*?"/g, `fill='${color}'`))}
    //     // src="https://cdn.svgporn.com/logos/react.svg"
    //     src={`/${name}.svg`}
    //     title={name} // name
    //     uniqueHash="a1f8d1"
    //     uniquifyIDs={true}
    // />
};

Icon.defaultProps = {
    size: 16,
    // color: 'red',
    className: "",
};

Icon.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
    src: PropTypes.string,
    size: PropTypes.number,
};

export default Icon;
