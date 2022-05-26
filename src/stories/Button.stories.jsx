import Button from "../components/Button/Button";
import Stack from "../components/Stack/Stack";

export default {
    title: "Components/Button/Button",
    component: Button,
    args: {
        variant: "contained",
        isDisabled: false,
        isLoading: false,
    },
    argTypes: {
        onClick: { action: "onClick" },
        backgroundColor: { control: "color" },
        borderColor: { control: "color" },
        iconColor: { control: "color" },
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
        isLoading: {
            options: ["true", "false"],
            control: { type: "boolean" },
        },
    },
};

// const Template = args => <Button {...args} />;
const Template = args => {
    console.log(Button.__docgenInfo.props);
    return (
        <>
            <Button {...args} />
        </>
    );
};

export const Default = Template.bind({});
Default.args = {
    children: "Default Button",
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
    isDisabled: true,
};

export const StartIcon = Template.bind({});
StartIcon.args = {
    children: "DELETE",
    variant: "outlined",
    startIcon: "delete",
};

export const EndIcon = Template.bind({});
EndIcon.args = {
    children: "SEND",
    variant: "outlined",
    endIcon: "send",
};

export const Loading = Template.bind({});
Loading.args = {
    children: "Loading...",
    variant: "outlined",
    isLoading: "true",
};