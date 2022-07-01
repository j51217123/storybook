import Button from "../components/Button/Button";

export default {
    title: "Components/Button/Button",
    component: Button,
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
            options: [true, false],
            control: { type: "boolean" },
        },
        isLoading: {
            options: [true, false],
            control: { type: "boolean" },
        },
    },
};

// const Template = args => <Button {...args} />;
const Template = args => {
    console.log("Button.__docgenInfo.props:", Button.__docgenInfo.props);
    return (
        <>
            <Button {...args} />
        </>
    );
};

export const Default = Template.bind({});
Default.args = {
    label: "Default Button",
};

export const Text = Template.bind({});
Text.args = {
    label: "Text",
    variant: "text",
};

export const Outlined = Template.bind({});
Outlined.args = {
    label: "Outlined Button",
    variant: "outlined",
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: "Disabled Button",
    isDisabled: true,
};

export const StartIcon = Template.bind({});
StartIcon.args = {
    label: "DELETE",
    variant: "outlined",
    iconName: "delete",
    iconPosition: "start",
};

export const EndIcon = Template.bind({});
EndIcon.args = {
    label: "SEND",
    variant: "outlined",
    iconName: "send",
    iconPosition: "end",
};

export const Loading = Template.bind({});
Loading.args = {
    label: "Loading...",
    variant: "outlined",
    isLoading: true,
};
