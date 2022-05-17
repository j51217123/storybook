import {useState,useEffect} from 'react'
import PropTypes from "prop-types";

const defaultStyles = { display: "inline-block", verticalAlign: "middle" };

const Icon = ({ size, color, name, className, style,width,height }) => {
    const [file, setFile] = useState({})
    const defaultWidth = 30
    const defaultHeight = 30
    const [svgWidth, setSvgWidth] = useState(defaultWidth)
    const [svgHeight, setSvgHeight] = useState(defaultHeight)
    const styles = { ...defaultStyles, ...style };
    const viewBox = "0 0 24 24";
    const xmlns = "http://www.w3.org/2000/svg";
    const xmlnsXlink = "http://www.w3.org/1999/xlink";

    useEffect(() => {
        import(
            /* webpackChunkName: "IconSVG" */
            /* webpackMode: "eager" */
            `../../Icon//${name}.svg`
        ).then(res => setFile(res.default))
    }, [name])

    useEffect(() => {
        if (file.viewBox) {
            const viewBoxArr = file.viewBox.split(" ");
            setSvgWidth(width || (viewBoxArr.length >= 3 ? viewBoxArr[2] : defaultWidth))
            setSvgHeight(height || (viewBoxArr.length >= 4 ? viewBoxArr[3] : defaultHeight))
        }
    }, [file])

    return (
        <svg
            className={className}
            style={styles}
            viewBox={viewBox}
            width={`${size}px`}
            height={`${size}px`}
            xmlns={xmlns}
            xmlnsXlink={xmlnsXlink}>
            <path fill={color} />
        </svg>
    );
};

Icon.defaultProps = {
    size: 16,
    color: "#000000",
    viewBox: "0 0 24 24",
    style: {},
    className: "",
};

Icon.propTypes = {
    size: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    viewBox: PropTypes.string.isRequired,
    style: PropTypes.shape(PropTypes.object),
    className: PropTypes.string,
};

export default Icon;
