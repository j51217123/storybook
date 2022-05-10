import Button from "../components/Button/Button";
import Stack from '../components/Stack/Stack';

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
            control: { type: "radio" },
        },
    },
};

const Template = args => (
    <Stack spacing={2}>
        <Button variant="text" {...args} />
        <Button variant="contained"{...args} />
        <Button variant="outlined" {...args} />
    </Stack>
);

export const LightBlue = Template.bind({});
LightBlue.args = {
    backgroundColor: "lightblue",
    label: "Click Me",
};
