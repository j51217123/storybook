import React from 'react';
import Button from "../components/Button/Button";

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
    border: '10px solid red',
    padding: '6px 160px',
    label: "Press me",
    size: "medium",
    handleClick: () => {
        handleTestClick();
    },
};

export const Blue = Template.bind({});
Blue.args = {
    backgroundColor: "blue",
    label: "Press me",
    size: "medium",
    handleClick: () => {
        handleTestClick();
    },
};