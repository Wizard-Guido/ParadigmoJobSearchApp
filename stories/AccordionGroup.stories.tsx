import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AccordionGroup from '../components/AccordionGroup/AccordionGroup';
import { ShortItem, NormalItem, LargeItem } from './AccordionItem.stories';


export default {
  title: 'Paradigmo/AccordionGroup',
  component: AccordionGroup,
} as ComponentMeta<typeof AccordionGroup>;

const Template: ComponentStory<typeof AccordionGroup> = (args) => (<AccordionGroup {...args} />);

export const OneItem = Template.bind({});

OneItem.args = {
  jobList: [ NormalItem.args ],
}

export const MultItems = Template.bind({});

MultItems.args = {
  jobList: [
    ShortItem.args,
    NormalItem.args,
    LargeItem.args,
  ]
};
