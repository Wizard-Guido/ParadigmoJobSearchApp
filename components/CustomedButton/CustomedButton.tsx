import styled from 'styled-components';


interface StyledButtonProps {
    bgColor?: string;
    fontColor?: string;
    text: string;
};

const ButtonWrapper = styled.div`
  width: 20vw;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 10rem;
  @media (max-width: 800px) {
    padding-top: 5.5rem;
    padding-right: 1rem;
  }
`;

export const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${props => props.bgColor || "#77c374"};
  color: ${props => props.fontColor || "#FFFFFF"};
  width: 12rem;
  height: 4rem;
  border: 0rem;
  border: none;
  border-radius: 0.6rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  font-size: 1.8rem;
  cursor: pointer;
  @media (max-width: 800px) {
    font-size: 1.4rem;
  }
`;

export default function CustomedButton({bgColor, fontColor, text}: StyledButtonProps) {

  const handleClick = () => {
    alert('This feature is coming soon :)');
  };

  return (

    <ButtonWrapper>
        <StyledButton text={text} onClick={handleClick} bgColor={bgColor} fontColor={fontColor}>{text}</StyledButton>
    </ButtonWrapper>
  )
};
