import Stack from "../components/Stack/Stack";
import StackChildren from "../components/Stack/StackChildren";

export default {
    title: "Components/Stack/Stack",
    component: Stack,
    argTypes: {
        numberOfChildren: { type: "number", defaultValue: 3 },
    },
};

const Template = ({ numberOfChildren, ...args }) => (
    <Stack {...args}>
        {[...Array(numberOfChildren).keys()].map(n => (
            <StackChildren numberOfChildren={n + 1} key={n} />
        ))}
    </Stack>
);

export const Horizontal = Template.bind({});
Horizontal.args = {
    direction: "row",
    spacing: 2,
};

export const Vertical = Template.bind({});
Vertical.args = {
    direction: "column",
    spacing: 2,
};

export const NoSpacing = Template.bind({});
NoSpacing.args = {
    direction: "row",
    spacing: 0,
};
