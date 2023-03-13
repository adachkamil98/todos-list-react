import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.color.white};
  border-bottom: ${({ theme }) => theme.color.concrete} solid 5px;
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: ${({ theme }) => theme.color.concrete} solid 2px;
  margin: 0px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h2`
  margin: 0;
  padding: 10px;
  border-bottom: none;
`;
