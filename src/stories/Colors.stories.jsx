import Color from "../components/Color/ColorItem";

export default {
    title: "Components/Color/ColorPalette",
    component: Color,
};


// const Template = args => <Button {...args} />;
const Template = args => {
    return (
        <>
            <Color />
        </>
    );
};

export const TTT = Template.bind({});
