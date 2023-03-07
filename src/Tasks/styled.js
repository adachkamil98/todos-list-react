import styled, { css } from "styled-components";

export const List = styled.ul`
  background-color: white;
  margin: 0px;
  padding: 10px;
  list-style-type: none;
`;

export const Item = styled.li`
  display: grid;
  padding: 10px;
  grid-template-columns: auto 1fr auto;
  border-bottom: 1px solid #ddd;
  align-self: center;
  grid-gap: 10px;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const TaskContent = styled.span`
  background-color: white;
  margin: 0px;
  padding: 10px;
  list-style-type: none;

  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  display: grid;
  align-self: center;
  height: 30px;
  width: 30px;
  color: white;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  transition: background-color 1000ms;

  ${({ toggleStatus }) =>
    toggleStatus &&
    css`
      padding: 5px;
      background-color: hsl(103, 80%, 30%);

      &:hover {
        background-color: hsl(103, 80%, 40%);
      }

      &:active {
        background-color: hsl(103, 80%, 45%);
      }
    `}

  ${({ clear }) =>
    clear &&
    css`
      padding: 6px 5px 5px 4px;
      background-color: hsl(0, 80%, 31%);

      &:hover {
        background-color: hsl(0, 80%, 38%);
      }

      &:active {
        background-color: hsl(0, 80%, 47%);
      }
    `}
`;
