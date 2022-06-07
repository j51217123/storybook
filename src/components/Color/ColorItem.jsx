import { useTheme } from "@mui/material/styles";
import * as colors from "@mui/material/colors/index";

const ColorItem = props => {
    const MUITheme = useTheme();
    const { palette } = MUITheme;

    // console.log(colors,'colors');
    const test = Object.entries(colors).reduce((data, color) => {
        const [name, value] = color;
        // console.log(color,'color');
        data.push({
            [name]: value,
        });
        return data;
    }, []);

    console.log('test: ', test);

    return (
        <>
            {/* {...(Array.isArray(colors) ? colors : [colors]) &&
                colors.map(color => {
                    console.log(color);
                    return (
                        <h1>aa</h1>
                    ) 
                })} */}

            {
                test?.map((t)=>{
                    console.log(t)
                    return(
                        <div>a</div>
                    )
                })
            }
        </>
    );
};

export default ColorItem;
