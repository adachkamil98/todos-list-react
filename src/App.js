import React from "react";
import TasksPage from "./features/tasks/TasksPage";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage.js";
import { NavbarContainer, NavbarItem, StyledLink } from "./styled";
import TaskPage from "./features/tasks/TaskPage";

const App = () => (
  <HashRouter>
    <nav>
      <NavbarContainer>
        <NavbarItem>
          <StyledLink to="/zadania">Zadania</StyledLink>
        </NavbarItem>
        <NavbarItem>
          <StyledLink to="/autor">Autor</StyledLink>
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
