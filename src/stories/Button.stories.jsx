import Button from "../components/Button/Button";
import Stack from "../components/Stack/Stack";

export default {
    title: "Components/Button/Button",
    component: Button,
    argTypes: {
        onClick: { action: "onClick" },
        backgroundColor: {control: 'color'},
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

const Template = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: "Default Button",
    variant: "contained",
    size: "medium",
    isDisabled: false,
};

export const Text = Template.bind({});
Text.args = {
    label: "Text",
    variant: "text",
    size: "medium",
};

export const Outlined = Template.bind({});
Outlined.args = {
    label: "Outlined Button",
    variant: "outlined",
    size: "medium",
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: "Disabled Button",
    variant: "contained",
    size: "medium",
    isDisabled: true,

};
