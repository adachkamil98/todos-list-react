import styled, { css } from "styled-components";

export const List = styled.ul`
  background-color: ${({ theme }) => theme.color.white};
  margin: 0px;
  padding: 10px;
  list-style-type: none;
`;

export const Item = styled.li`
  display: grid;
  padding: 10px;
  grid-template-columns: auto 1fr auto;
  border-bottom: 1px solid ${({ theme }) => theme.color.alto};
  align-self: center;
  grid-gap: 10px;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const TaskContent = styled.span`
  background-color: ${({ theme }) => theme.color.white};
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
  color: ${({ theme }) => theme.color.white};
  border: none;
  border-radius: 2px;
  cursor: pointer;
  transition: filter 700ms;

  ${({ toggleStatus }) =>
    toggleStatus &&
    css`
      padding: 5px;
      background-color: ${({ theme }) => theme.color.laPalma};

      &:hover {
        filter: brightness(125%);
      }

      &:active {
        filter: brightness(150%);
      }
    `}

  ${({ clear }) =>
    clear &&
    css`
      padding: 6px 5px 5px 4px;
      background-color: ${({ theme }) => theme.color.tamarillo};

      &:hover {
        filter: brightness(125%);
      }

      &:active {
        filter: brightness(150%);
      }
    `}
`;
