import Button from "../components/Button/Button";

export default {
    title: "Components/Button/Button",
    component: Button,
    argTypes: {
        handleClick: { action: "handleClick" },
        size: {
            options: ["small", "medium", "large"],
            control: { type: "radio" },
        },
        variant: {
            options: ["text", "contained", "outlined"],
        },
    },
};

const Template = args => <Button {...args} />;

export const LightBlue = Template.bind({});
LightBlue.args = {
    backgroundColor: "lightblue",
    label: "Click Me",
};
