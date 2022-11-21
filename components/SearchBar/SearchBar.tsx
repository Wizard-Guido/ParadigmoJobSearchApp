import styled from 'styled-components';
import {
    useHits,
    UseHitsProps,
    InstantSearch,
    SearchBox,
  } from 'react-instantsearch-hooks-web';
import { useCallback, useEffect } from 'react';


const StyledSearchBar = styled(InstantSearch)`
    width: 100%;
`;

const CustomHits: React.FC<{props?: UseHitsProps}> = ({ props }) => {
    const { hits } = useHits(props);

    useEffect(() => {
      localStorage.setItem('jobs', JSON.stringify(hits));
    }, [hits]);


    return (
        <div>
        </div>
    )
};

const escapeHTML: boolean = true;

export default function SearchBar({indexName, searchClient, placeHolderText}: SearchBarProps) {
  const transformItems: UseHitsProps['transformItems'] = useCallback((items: any) => {
    return items.map((item: any) => ({
        id: item.id,
        jobTitle: item.title,
        companyName: item.company_name,
        jobDescription: item.description,
        location: item.city + ", " + item.country,
    }))
  }, []);


  return (
    <StyledSearchBar indexName={indexName} searchClient={searchClient}>
        <SearchBox 
          placeholder= {placeHolderText}
          resetIconComponent={() => (<></>)}
          onSubmit={() => {location.href='/jobs'}}
        />
        <CustomHits props={{escapeHTML, transformItems}} />
    </StyledSearchBar>
  )
};
