import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { StyledForm, Input, AddButton } from "./styled.js";
import { addTask } from "../../tasksSlice.js";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedTaskContent = newTaskContent.trim();

    if (!trimmedTaskContent) {
      return;
    }
    dispatch(
      addTask({
        content: trimmedTaskContent,
        done: false,
        id: nanoid(),
      })
    );

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
