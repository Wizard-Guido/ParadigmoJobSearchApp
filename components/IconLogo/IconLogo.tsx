import Link from 'next/link';
import styled from 'styled-components';

interface StyledIconProps {
    urlAddress?: string;
    maxWidth?: string;
    maxHeight?: string;
    homeHref?: string;
    className?: string;
};

const IconWrapper = styled.div`
  width: 20vw;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 10rem;
`;

const StyledImg = styled.img<StyledIconProps>`
  position: absolute;
  top: 10rem;
  left: 15rem;
  max-width: ${props => props.maxWidth || "6rem"};
  max-height: ${props => props.maxHeight || "7rem"};
  width: auto;
  height: auto;
  @media (max-width: 800px) {
    top: 5rem;
    left: 4rem;
    max-width: 4rem;
  }

`;

export function Icon({ urlAddress, maxWidth, maxHeight }: StyledIconProps) {

    return (
      <StyledImg src={urlAddress ?? '/Paradigmo_Logo.png'} alt="logo" maxWidth={maxWidth} maxHeight={maxHeight}/>
    )
};

export default function IconLogo({ urlAddress, maxWidth, maxHeight, homeHref='/', className }: StyledIconProps) {


  return (
    <IconWrapper className={'w-1/5 h-full flex pt-40 justify-center ' + className}>
      <Link href={homeHref}>
        <Icon urlAddress={urlAddress} maxWidth={maxWidth} maxHeight={maxHeight} />
      </Link>
    </IconWrapper>
  )
};
