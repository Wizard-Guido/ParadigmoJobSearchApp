import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AccordionItem from '../components/AccordionItem/AccordionItem';
import { userEvent, within } from '@storybook/testing-library';

export default {
  title: 'Paradigmo/AccordionItem',
  component: AccordionItem,
} as ComponentMeta<typeof AccordionItem>;

const Template: ComponentStory<typeof AccordionItem> = (args) => <AccordionItem {...args} />;
const clickEvent = ({canvasElement}: { canvasElement: any }) => {
    const canvas = within(canvasElement);
    userEvent.click(canvas.getByTestId('buttonTestOne'));
};

export const ShortItem = Template.bind({});
ShortItem.args = {
  jobTitle: 'One',
  jobDescription: 'Short Description', 
  location: 'ShortLoc', 
  companyName: 'ShortCom',
};
ShortItem.play = clickEvent;

export const NormalItem = Template.bind({});
NormalItem.args = {
    jobTitle: 'Super super suepr good frontend engineer',
    jobDescription: 'Strong skills in front-end development\nA deep understanding of JavaScript and considerable experience building thick-client applications with modern frameworks such as Ember or Angular, Backbone, React or Vue\nA desire to collaborate closely with users, designers, & testers to deliver quality software that solves problems\nProfound knowledge in software architecture design and REST API\nExperience with using the Linux operating system or another Unix-like operating system.\nExperience with testing frameworks, tools and methodologies such as Jtest, QUnit, Mocha & Selenium\nComfortable with Agile Scrum and Kanban processes', 
    location: 'London, United Kingdom', 
    companyName: 'Inploi',
};
NormalItem.play = clickEvent;

export const LargeItem = Template.bind({});
LargeItem.args = {
  jobTitle: 'Super super suepr good frontend engineer Super super suepr good frontend engineer',
  jobDescription: 'Strong skills in front-end development\nA deep understanding of JavaScript and considerable experience building thick-client applications with modern frameworks such as Ember or Angular, Backbone, React or Vue\nA desire to collaborate closely with users, designers, & testers to deliver quality software that solves problems\nProfound knowledge in software architecture design and REST API\nExperience with using the Linux operating system or another Unix-like operating system.\nExperience with testing frameworks, tools and methodologies such as Jtest, QUnit, Mocha & Selenium\nComfortable with Agile Scrum and Kanban processes\nStrong skills in front-end development\nA deep understanding of JavaScript and considerable experience building thick-client applications with modern frameworks such as Ember or Angular, Backbone, React or Vue\nA desire to collaborate closely with users, designers, & testers to deliver quality software that solves problems\nProfound knowledge in software architecture design and REST API\nExperience with using the Linux operating system or another Unix-like operating system.\nExperience with testing frameworks, tools and methodologies such as Jtest, QUnit, Mocha & Selenium\nComfortable with Agile Scrum and Kanban processes', 
  location: 'London, United Kingdom, London, United Kingdom', 
  companyName: 'Inploi Inploi',
};
LargeItem.play = clickEvent;