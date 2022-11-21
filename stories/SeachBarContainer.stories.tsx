import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SearchBarContainer from '../components/SearchBar/SearchBarContainer';
import algoliasearch from 'algoliasearch/lite';

export default {
  title: 'Paradigmo/SearchBarContainer',
  component: SearchBarContainer,
} as ComponentMeta<typeof SearchBarContainer>;

const Template: ComponentStory<typeof SearchBarContainer> = (args) => <SearchBarContainer {...args} />;
const searchClient = algoliasearch(
    'RY8KA2GJPX',
    '13e751a21f2ae69d7ccb7b590a0a9b3a'
  );

export const SearchBarBox = Template.bind({});
SearchBarBox.args = {
    indexName: 'development_jobs_index', 
    searchClient: searchClient, 
    placeHolderText: 'Search jobs by keyword or location',
};


