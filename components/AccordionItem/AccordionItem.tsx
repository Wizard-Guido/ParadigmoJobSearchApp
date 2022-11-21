import React, { useCallback, useState } from 'react';
import styled from 'styled-components';


export interface JobInfoProps {
    jobTitle: string,
    jobDescription: string,
    location: string,
    companyName: string,
};

const StyledButton = styled.button<{clicked: boolean}>`
    cursor: pointer;
    padding: 2rem;
    text-align: left;
    border-style: none;
    border: 0rem;
    border-radius: 1.2rem;
    border-bottom-left-radius: ${props => props.clicked ? "0rem" : "1.2rem"};
    border-bottom-right-radius: ${props => props.clicked ? "0rem" : "1.2rem"};
    width: 100%;
    box-shadow: ${props => props.clicked ? "0rem -0.1rem 1rem #d1d5db" : "0rem 0rem 1.2rem #d1d5db"};
    font-size: 2.8rem;
    outline-style: none;
    transition: 1s;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(255 255 255);
    &:hover {
        background-color: rgb(248 250 252);
    }
    @media (max-width: 800px) {
        font-size: 1.6rem;
        padding: 1rem;
        border-radius: 0.8rem;
    }
`;

const StyledPanel = styled.div<{clicked: boolean}>`
    max-height: ${props => props.clicked ? "100rem" : "0rem"};
    height: ${props => props.clicked ? "fit-content" : "0rem"};
    overflow: auto;
    margin-top: 0.3rem;
    font-size: 1.8rem;
    padding: 0rem 1.8rem;
    width: 100%;
    border: 0rem;
    border-bottom-left-radius: 1.2rem;
    border-bottom-right-radius: 1.2rem;
    box-shadow: 0rem 0.1rem 1rem #d1d5db;
    background-color: white;
    overflow: hidden;
    transition: max-height 0.4s ease-in-out;
    @media (max-width: 800px) {
        font-size: 1.2rem;
        padding:0rem 1rem;
        border-radius: 0.8rem;
        border-bottom-left-radius: 0.8rem;
        border-bottom-right-radius: 0.8rem;
    }
`;

const StyledFooter = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 1.8rem;
    margin-bottom: 1rem;
    @media (max-width: 800px) {
        font-size: 1.2rem;
    }
`

export default function AccordionItem({ jobTitle, jobDescription, location, companyName }: JobInfoProps) {
  
  const [clicked, setClicked] = useState<boolean>(false);
  
  const handleClick = useCallback(() => {
    setClicked(clicked ? false : true);
  }, [clicked]);

  return (
    <div className='w-full mt-8'>
        <StyledButton clicked={clicked} onClick={handleClick} data-testid='buttonTestOne'>
            {jobTitle}
            <span className={`${clicked ? "text-4xl pt-3.5 pr-1.5" : "text-6xl"} max-[800px]:text-2xl`}>{clicked ? "\u{2715}" : '+'}</span>
        </StyledButton>
        <StyledPanel clicked={clicked}>
            <p className='py-11'>{jobDescription}</p>
            <StyledFooter>
                <p className='text-gray-300 pt-1 max-[800px]:text-base'>{companyName + ", " + location}</p>
                <button className='bg-black text-white border-0 rounded-lg px-6 py-1.5 max-[800px]:text-base'>Apply now </button>
            </StyledFooter>
        </StyledPanel>
    </div>
  )
};
