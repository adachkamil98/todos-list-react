import styled from "styled-components";

export const HeaderSection = styled.section`
  background-color: white;
  border-bottom: #f2f2f2 solid 5px;
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: #f2f2f2 solid 2px;
  margin: 0px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h2`
  margin: 0;
  padding: 10px;
  border-bottom: none;
`;
