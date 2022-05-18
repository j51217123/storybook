import Button from "../components/Button/Button";
import Stack from "../components/Stack/Stack";

export default {
    title: "Components/Button/Button",
    component: Button,
    argTypes: {
        onClick: { action: "onClick" },
        backgroundColor: { control: "color" },
        borderColor: { control: "color" },
        color: { control: "color" },
        size: {
            options: ["small", "medium", "large"],
            control: { type: "radio" },
        },
        variant: {
            options: ["text", "contained", "outlined"],
            control: { type: "radio" },
        },
        isDisabled: {
            options: ["true", "false"],
            control: { type: "boolean" },
        },
    },
};

// const Template = args => <Button {...args} />;
const Template = args => {
    console.log(Button.__docgenInfo.props);
    return <Button {...args} />;
};

export const Default = Template.bind({});
Default.args = {
    children: "Default Button",
    variant: "contained",
    isDisabled: false,
};

export const Text = Template.bind({});
Text.args = {
    children: "Text",
    variant: "text",
};

export const Outlined = Template.bind({});
Outlined.args = {
    children: "Outlined Button",
    variant: "outlined",
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: "Disabled Button",
    variant: "contained",
    isDisabled: true,
};

export const Icon = Template.bind({});
Icon.args = {
    children: "Icon Button",
    variant: "outlined",
    // startIcon: "delete",
    // color: "#1976d2",
    backgroundColor: "#fff",
};
