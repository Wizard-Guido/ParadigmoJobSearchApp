import algoliasearch from 'algoliasearch/lite';
import styled from 'styled-components';
import CustomedButton from '../components/CustomedButton/CustomedButton';
import IconLogo from '../components/IconLogo/IconLogo';
import SearchBarContainer from '../components/SearchBar/SearchBarContainer';  

const HomeWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: radial-gradient(circle, #f1f5f5, #dcf3f2, #c7f0ec, #b3eee4, #9febda, #94ebd8, #8aecd5, #7eecd2, #77f0d9, #70f4e1, #68f7e9, #5ffbf1);
  display: flex;
  justify-content: center;
`;

export default function Home() {

  const searchClient = algoliasearch(
    'RY8KA2GJPX',
    '13e751a21f2ae69d7ccb7b590a0a9b3a'
  );

  return (
    <HomeWrapper>
      <IconLogo urlAddress='/Paradigmo_Logo.png'/>
      <SearchBarContainer indexName='development_jobs_index' searchClient={searchClient} placeHolderText="Search jobs by keyword or location" />
      <CustomedButton text='Login'/>
    </HomeWrapper>
  )
};
