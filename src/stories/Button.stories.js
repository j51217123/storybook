import Button from "../components/Button";

export default {
    title: "Components/Button",
    component: Button,
    argTypes: { handleClick: { action: "handleClick" } },
};

const Template = args => <Button {...args} />;

const handleTestClick = () => {
    alert("this is test");
};

export const Red = Template.bind({});
Red.args = {
    backgroundColor: "red",
    label: "Press me",
    size: "md",
    handleClick: () => {
        handleTestClick();
    },
};

export const Blue = Template.bind({});
Blue.args = {
    backgroundColor: "blue",
    label: "Press me",
    size: "md",
    handleClick: () => {
        handleTestClick();
    },
};