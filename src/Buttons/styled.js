import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.color.teal};
  background: transparent;
  border: none;
  margin: 0 10px 0 20px;
  transition: filter 800ms;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    flex-basis: 100%;
    margin: 10px;
    letter-spacing: 2px;
  }

  &:hover {
    filter: brightness(120%);
    cursor: pointer;
  }

  &:disabled {
    color: ${({ theme }) => theme.color.silver};
  }
`;
