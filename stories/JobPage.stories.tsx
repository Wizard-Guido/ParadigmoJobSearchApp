import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Jobs from '../pages/jobs';

export default {
  title: 'Paradigmo/Jobs',
  component: Jobs,
} as ComponentMeta<typeof Jobs>;


const Template: ComponentStory<typeof Jobs> = (args) => <Jobs />;

export const JobPage = Template.bind({});
