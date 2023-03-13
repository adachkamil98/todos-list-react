import styled from "styled-components";

export const StyledForm = styled.form`
  min-width: 200px;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
  }
`;

export const Input = styled.input`
  border: rgb(151, 151, 151) solid 1px;
  border-radius: 1px;
  padding: 10px;
`;

export const AddButton = styled.button`
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.teal};
  border: none;
  padding: 10px;
  grid-gap: 0;
  text-align: center;
  transition: filter 700ms, transform 500ms;
  cursor: pointer;

  &:hover {
    filter: brightness(125%);
    transform: scale(1.05);
  }

  &:active {
    filter: brightness(150%);
  }
`;
