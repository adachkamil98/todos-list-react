import { useState } from "react"
import "./style.css";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (newTaskContent.trim() === "") {
      setNewTaskContent("")
      return;

    } else {
      addNewTask(newTaskContent.trim())
    };
    setNewTaskContent("");
  }

  return (
    <form
      className="form"
      type="input"
      onSubmit={onFormSubmit}
    >
      <input
        value={newTaskContent}
        className="form__input"
        type="text"
        name="tasks"
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <button className="form__addButton">Dodaj zadanie</button>
    </form>
  )
};

export default Form;