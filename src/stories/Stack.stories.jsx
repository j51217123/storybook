import Stack from "../components/Stack/Stack";

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
            <div
                style={{
                    width: "50px",
                    height: "50px",
                    color: "rgba(0, 0, 0, 0.6)",
                    backgroundColor: "#E7EBF0",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                {n + 1}
            </div>
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
