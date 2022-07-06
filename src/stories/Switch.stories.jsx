import { lightBlue } from "@mui/material/colors";
import Switch from "../components/Switch/Switch";

export default {
    title: "Components/Switch/Switch",
    component: Switch,
    argTypes: {
        backgroundColor: { control: "color" },
        size: {
            options: ["small", "medium", "large"],
            control: { type: "radio" },
        },
    },
};

// const Template = args => <Button {...args} />;
const Template = args => {
    return (
        <>
            <Switch {...args} />
        </>
    );
};

export const Default = Template.bind({});
Default.args = {
    backgroundColor: "red",
};
