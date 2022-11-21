import styled from 'styled-components';
import SearchBar from './SearchBar';


const SearchBarWrapper = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
`;

const ContentWrapper = styled.div`
    width: 100%;
`;

const SloganBox = styled.div`
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: Verdana;
  @media (max-width: 800px) {
    font-size: 1.8rem;
  }
`;

const Paragraph = styled.p`
  margin: 0.5rem;
`


export default function SearchBarContainer({indexName, searchClient, placeHolderText}: SearchBarProps) {


  return (
    <SearchBarWrapper>
      <ContentWrapper>
        <SloganBox>
          <Paragraph>Find a job you love &#128170;</Paragraph>
          <Paragraph>with Paradigmo.</Paragraph>
        </SloganBox>
        <SearchBar indexName={indexName} searchClient={searchClient} placeHolderText={placeHolderText} />
      </ContentWrapper>
    </SearchBarWrapper>
  )
};


