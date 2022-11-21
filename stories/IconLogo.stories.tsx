import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import IconLogo from '../components/IconLogo/IconLogo';
import { userEvent, within } from '@storybook/testing-library';

export default {
  title: 'Paradigmo/IconLogo',
  component: IconLogo,
} as ComponentMeta<typeof IconLogo>;


const Template: ComponentStory<typeof IconLogo> = (args) => <IconLogo {...args} />;
const clickEvent = ({canvasElement}: { canvasElement: any }) => {
    const canvas = within(canvasElement);
    userEvent.click(canvas.getByRole('img'));
}

export const SmallSize = Template.bind({});

SmallSize.args = {
    maxWidth: '3rem',
    homeHref: '/',
};
SmallSize.play = clickEvent;

export const NormalSize = Template.bind({});

NormalSize.args = {
//   urlAddress: '/Paradigmo_Logo.png',
  maxWidth: '6rem',
  homeHref: '/',
};
NormalSize.play = clickEvent;

export const LargeSize = Template.bind({});

LargeSize.args = {
//   urlAddress: '/Paradigmo_Logo.png',
  maxWidth: '10rem',
  homeHref: '/',
};
LargeSize.play = clickEvent;
