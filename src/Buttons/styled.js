import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  color: teal;
  background: transparent;
  border: none;
  margin: 0 10px 0 20px;
  transition: color 800ms;

  @media (max-width: 767px) {
    flex-basis: 100%;
    margin: 10px;
    letter-spacing: 2px;
  }

  &:hover {
    color: hsl(180, 100%, 35%);
    cursor: pointer;
  }

  &:disabled {
    color: #ccc;
  }
`;
