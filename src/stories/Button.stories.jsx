import Button from "../components/Button/Button"

export default {
  title: "Components/Button/Button",
  component: Button,
  argTypes: { handleClick: { action: "handleClick" } },
}

const Template = args => <Button {...args} />

export const Red = Template.bind({})
Red.args = {
  backgroundColor: "yellow",
  label: "Press Me",
  size: "md",
}

export const Green = Template.bind({})
Green.args = {
  backgroundColor: "green",
  label: "Press Me",
  size: "md",
}

export const Small = Template.bind({})
Small.args = {
  backgroundColor: "blue",
  label: "Press Me",
  size: "sm",
}

export const Large = Template.bind({})
Large.args = {
  backgroundColor: "lightblue",
  label: "Press Me",
  size: "lg",
}

export const LongLabel = Template.bind({})
LongLabel.args = {
  backgroundColor: "lightpink",
  label: "Press Me adsf asdf asdf asdfasdfasd fasd fasd fasd",
  size: "md",
}