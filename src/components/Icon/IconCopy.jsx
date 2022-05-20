import {useState,useEffect} from 'react'

import PropTypes from "prop-types";

const defaultWidth = 30
const defaultHeight = 30
const defaultStyles = { display: "inline-block", verticalAlign: "middle" };

const Icon = ({  color,title, name, className, style,width,height,...option }) => {
    const [file, setFile] = useState({})

    const [svgWidth, setSvgWidth] = useState(defaultWidth)
    const [svgHeight, setSvgHeight] = useState(defaultHeight)
    // const styles = { ...defaultStyles, ...style };
    const viewBox = "0 0 24 24";
    const xmlns = "http://www.w3.org/2000/svg";
    const xmlnsXlink = "http://www.w3.org/1999/xlink";

    useEffect(() => {
        import(
            `../../Images/${name}.svg`
        ).then(res => {
            setFile(res.default)
        })
    }, [name])


    useEffect(() => {
        console.log(file)
        if (file.viewBox) {
            const viewBoxArr = file.viewBox.split(" ");
            setSvgWidth(width || (viewBoxArr.length >= 3 ? viewBoxArr[2] : defaultWidth))
            setSvgHeight(height || (viewBoxArr.length >= 4 ? viewBoxArr[3] : defaultHeight))
        }
    }, [file])

    return (
        // <svg
        //     className={className}
        //     style={styles}
        //     viewBox={viewBox}
        //     width={`${svgWidth}px`}
        //     height={`${svgHeight}px`}
        //     xmlns={xmlns}
        //     xmlnsXlink={xmlnsXlink}>

            
        // </svg>

        <svg
        viewBox={viewBox}
        width={svgWidth}
        height={svgHeight}
        fill={color}
        // aria-label={title}
        className={className}
        >
        {/* {title && <title>{title}</title>} */}
        <use  xlinkHref={`#${name}`} />
        </svg>
    );
};

// Icon.defaultProps = {
//     size: 16,
//     color: "#000000",
//     viewBox: "0 0 24 24",
//     style: {},
//     className: "",
// };

Icon.defaultProps = {
    width: null,
    height: null,
    name: null,
    title: null
}

Icon.propTypes = {
    size: PropTypes.number,
    color: PropTypes.string,
    icon: PropTypes.string,
    viewBox: PropTypes.string,
    style: PropTypes.shape(PropTypes.object),
    className: PropTypes.string,
};

export default Icon;
