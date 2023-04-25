import styled from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const TaskLink = styled(Link)`
  color: ${({ theme }) => theme.color.teal};
  text-decoration: none;
  transition: filter 800ms;

  &:hover {
    filter: brightness(120%);
    cursor: pointer;
  }
`;
