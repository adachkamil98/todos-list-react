import "./style.css";

const Tasks = (props) => (
  <ul className="list">
    {props.tasks.map(task => (
      <li
        key={task.id}
        className=
        {`list list__item ${task.done && props.hideDoneTasks ? "list__item--hidden" : ""}`}
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