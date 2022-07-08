import Switch from "../components/Switch/Switch";

export default {
    title: "Components/Switch/Switch",
    component: Switch,
    args: {
        size: "medium",
    },
    argTypes: {
        color: { control: "color" },
        size: {
            options: ["small", "medium", "large"],
            control: { type: "radio" },
        },
        isDisabled: {
            options: [true, false],
            control: { type: "boolean" },
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
Default.args = {};
