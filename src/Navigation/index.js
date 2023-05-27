import { toAuthor, toTasks } from "../routes";
import { NavbarContainer, NavbarItem, StyledNavLink } from "./styled";

export const Navigation = () => (
  <NavbarContainer>
    <NavbarItem>
      <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
    </NavbarItem>
    <NavbarItem>
      <StyledNavLink to={toAuthor()}>Autor</StyledNavLink>
    </NavbarItem>
  </NavbarContainer>
);
