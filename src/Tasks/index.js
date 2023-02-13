import "./style.css";

const Tasks = ({ tasks, hideDone }) => (
  <ul className="list">
    {tasks.map(task => (
      <li
        key={task.id}
        className=
        {`list__item ${task.done && hideDone ? "list__item--hidden" : ""}`}
      >
        <button className="list__button list__button--toggleStatusButton">
          {task.done ? "✔" : ""}
        </button>
        <span className={`list__taskContent ${task.done ? "list__taskDone" : "list__taskContent"}`}>
          {task.content}
        </span>
        <button className="list__button list__button--clearButton">
          🗑️
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;