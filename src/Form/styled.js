import styled from "styled-components";

export const TasksForm = styled.form`
  min-width: 200px;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;
  padding: 20px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const Input = styled.input`
  border: rgb(151, 151, 151) solid 1px;
  border-radius: 1px;
  padding: 10px;
`;

export const AddButton = styled.button`
  color: white;
  background-color: hsl(180, 100%, 25%);
  border: none;
  padding: 10px;
  grid-gap: 0;
  text-align: center;
  transition: background-color 700ms, transform 500ms;
  cursor: pointer;

  &:hover {
    background-color: hsl(180, 100%, 32%);
    transform: scale(1.05);
  }

  &:active {
    background-color: hsl(180, 100%, 39%);
  }
`;
