import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.color.teal};
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: sticky;
  top: 0;
`;

export const NavbarItem = styled.li`
  background-color: ${({ theme }) => theme.color.teal};
  display: flex;
  text-decoration: none;
  padding: 5px;
  transition: filter 500ms;

  &:hover {
    filter: brightness(110%);
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  padding: 10px;
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  cursor: pointer;

  &.active {
    font-weight: bold;
  }
`;
