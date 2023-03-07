import { useState } from "react";
import { TasksForm, Input, AddButton } from "./styled.js";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (newTaskContent.trim() === "") {
      setNewTaskContent("");
      return;
    } else {
      addNewTask(newTaskContent.trim());
    }
    setNewTaskContent("");
  };

  return (
    <TasksForm type="input" onSubmit={onFormSubmit}>
      <Input
        value={newTaskContent}
        type="text"
        name="tasks"
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) =>
          setNewTaskContent(target.value)
        }
      />
      <AddButton>Dodaj zadanie</AddButton>
    </TasksForm>
  );
};

export default Form;
