import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <ul className="list">
    {tasks.map(task => (
      <li
        key={task.id}
        className=
        {`list__item ${task.done && hideDone ? "list__item--hidden" : ""}`}
      >
        <button 
        className="list__button list__button--toggleStatusButton"
        onClick={() => toggleTaskDone(task.id)}
        >
          {task.done ? "✔" : ""}
        </button>
        <span className={`list__taskContent ${task.done ? "list__taskDone" : "list__taskContent"}`}>
          {task.content}
        </span>
        <button 
        className="list__button list__button--clearButton"
        onClick={() => removeTask(task.id)}
        >
          🗑️
        </button>
      </li>
    ))};
  </ul>
);

export default Tasks;