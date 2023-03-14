import { useState, useRef } from "react";
import { StyledForm, Input, AddButton } from "./styled.js";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedTaskContent = newTaskContent.trim();

    if (trimmedTaskContent !== "") {
      addNewTask(trimmedTaskContent);
    }

    setNewTaskContent("");
    inputRef.current.focus();
  };

  return (
    <StyledForm type="input" onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        value={newTaskContent}
        type="text"
        name="tasks"
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <AddButton>Dodaj zadanie</AddButton>
    </StyledForm>
  );
};

export default Form;
