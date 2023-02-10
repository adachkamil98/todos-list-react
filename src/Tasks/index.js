import "./style.css";

const Tasks = ({ tasks, hideDoneTasks }) => (
  <ul className="list">
    {tasks.map(task => (
      <li
        key={task.id}
        className=
        {`list list__item ${task.done && hideDoneTasks ? "list__item--hidden" : ""}`}
      >

        <button className="list__toggleStatusButton">
          {task.done ? "✔" : ""}
        </button>
        <span className={`list ${task.done ? "list__taskDone" : "list"}`}>
          {task.content}
        </span>
        <button className="list__clearButton">
          🗑️
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;