import styled from "styled-components";
import { css } from "styled-components";

export const Content = styled.div`
  padding: 20px;
  min-width: 300px;
  max-width: 1200px;
  margin: auto;
  word-spacing: 2px;
  text-align: center;
`;
export const FlexContainer = styled.div`
  display: flex;
  max-width: 1200px;
  padding: 0px;
  justify-content: center;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    flex-wrap: wrap;
  }
`;

export const FlexItem = styled.header`
  margin: 12px 20px;
  border: teal solid 12px;
  border-radius: 10px;
  padding: 20px;
  flex-basis: 51%;
  flex-grow: 1;
  margin: 15px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    flex-basis: 100%;
  }
`;

export const StyledTable = styled.table`
  color: black;
  margin: auto;
  border-radius: 50px;
`;

export const TableCaption = styled.caption`
  font-size: larger;
  caption-side: top;
  text-align: center;
  padding: 10px;
`;

export const TableHeader = styled.th`
  text-align: center;
  vertical-align: middle;
  font-weight: bold;
  background-color: rgb(250, 230, 190);
  padding: 10px;
  min-width: 90px;

  ${({ upLeftRounded }) =>
    upLeftRounded &&
    css`
      border-radius: 10px 0 0 0;
    `}

  ${({ upRightRounded }) =>
    upRightRounded &&
    css`
      border-radius: 0 10px 0 0;
      padding-left: 5px;
      padding-right: 5px;
    `}
`;

export const TableData = styled.td`
  padding: 5px;
  text-align: center;
  font-weight: normal;
  vertical-align: middle;
`;

export const TableRow = styled.tr`
  &:nth-child(odd) {
    background-color: #eeeeee;
  }
  &:hover {
    background-color: rgb(260, 230, 165);
  }
`;

export const SectionLink = styled.a`
  display: inline-block;
  padding: 5px;
  text-decoration: none;
`;

export const TableLink = styled.a`
  text-decoration: none;
`;

export const SubHeader = styled.h3`
  text-align: left;
`;

export const SubHeaderParagraph = styled.p`
  text-align: left;
`;

export const HandPanPhoto = styled.img`
  margin: auto;
  display: block;
  width: 100%;
  height: fit-content;
  padding: 10px;
  border-radius: 50px;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr;
  grid-gap: 10px;
`;

export const FrontPhoto = styled.img`
  margin: auto;
  display: grid;
  width: 100px;
  height: fit-content;
  padding: 10px;
  border-radius: 50%;
`;
