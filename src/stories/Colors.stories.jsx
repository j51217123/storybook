import Colors from "../components/Color/ColorPalette";

export default {
    title: "foundation/Colors",
    component: Colors,
};


// const Template = args => <Button {...args} />;
const Template = args => {
    return (
        <>
            <Colors />
        </>
    );
};

export const ColorPalette = Template.bind({});
