
import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: auto;
  background-color: teal;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: sticky;
  top: 0;
`;

export const NavbarItem = styled.li`
  display: flex;
  text-decoration: none;
  padding: 15px;
  
`;

export const StyledLink = styled(Link)`
display: flex;
color: white;
text-decoration: none;
`