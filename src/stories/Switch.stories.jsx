import Switch from "../components/Switch/Switch";

export default {
    title: "Components/Switch/Switch",
    component: Switch,
};

// const Template = args => <Button {...args} />;
const Template = args => {
    return (
        <>
            <Switch />
        </>
    );
};

export const Default = Template.bind({});
