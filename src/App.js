import React from "react";
import TasksPage from "./features/tasks/TasksPage";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage.js";
import { NavbarContainer, NavbarItem, StyledNavLink } from "./styled";
import TaskPage from "./features/tasks/TaskPage";

const App = () => (
  <HashRouter>
    <nav>
      <NavbarContainer>
        <NavbarItem>
          <StyledNavLink to="/zadania">Zadania</StyledNavLink>
        </NavbarItem>
        <NavbarItem>
          <StyledNavLink to="/autor">Autor</StyledNavLink>
        </NavbarItem>
      </NavbarContainer>
      <Switch>
        <Route path="/zadania/:id">
          <TaskPage />
        </Route>
        <Route path="/zadania">
          <TasksPage />
        </Route>
        <Route path="/autor">
          <AuthorPage />
        </Route>
        <Route path="/">
            <Redirect to="/zadania"/>
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);

export default App;
