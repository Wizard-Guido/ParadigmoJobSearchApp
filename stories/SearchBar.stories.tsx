import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SearchBar from '../components/SearchBar/SearchBar';
import algoliasearch from 'algoliasearch/lite';


export default {
  title: 'Paradigmo/SearchBar',
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;


const Template: ComponentStory<typeof SearchBar> = (args) => <SearchBar {...args} />;
const searchClient = algoliasearch(
    'RY8KA2GJPX',
    '13e751a21f2ae69d7ccb7b590a0a9b3a'
  );

export const SmallSearchBar = Template.bind({});
SmallSearchBar.args = {
    indexName: 'development_jobs_index',
    searchClient: searchClient,
    placeHolderText: 'Search jobs by keyword or location',
};
