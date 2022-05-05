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
    },
};

const Template = args => <Button {...args} />;

export const Yellow = Template.bind({});
Yellow.args = {
    backgroundColor: "yellow",
    label: "yellow Me",
    size: "large",
};

export const Green = Template.bind({});
Green.args = {
    backgroundColor: "green",
    label: "Press Me",
    size: "small",
};

export const Small = Template.bind({});
Small.args = {
    backgroundColor: "blue",
    label: "Press Me",
    size: "small",
};

export const Large = Template.bind({});
Large.args = {
    backgroundColor: "lightblue",
    label: "Press Me",
    size: "large",
};

export const LongLabel = Template.bind({});
LongLabel.args = {
    backgroundColor: "lightpink",
    label: "Press Me adsf asdf asdf asdfasdfasd fasd fasd fasd",
    size: "small",
};
