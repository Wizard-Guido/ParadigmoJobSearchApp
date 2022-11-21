import { ComponentMeta, ComponentStory } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import CustomedButton from "../components/CustomedButton/CustomedButton";


export default {
    title: 'Paradigmo/CustomedButton',
    component: CustomedButton,
} as ComponentMeta<typeof CustomedButton>;

const Template: ComponentStory<typeof CustomedButton> = (args) => <CustomedButton {...args} />;

export const BlackButton = Template.bind({});
BlackButton.args = {
    bgColor: "black",
    fontColor: "white", 
    text: "Click",
};

BlackButton.play = ({ canvasElement }) => {
    const canvas = within(canvasElement);
    userEvent.click(canvas.getByRole('button'));
};

export const LoginButton = Template.bind({});
LoginButton.args = {
    bgColor: "#77c374",
    fontColor: "#FFFFFF", 
    text: "Login",
};

LoginButton.play = ({ canvasElement }) => {
    const canvas = within(canvasElement);
    userEvent.click(canvas.getByRole('button'));
};