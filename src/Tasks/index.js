import { List, Item, TaskContent, Button } from "./styled.js";

const Tasks = ({
  tasks,
  hideDone,
  removeTask,
  toggleTaskDone,
}) => (
  <List>
    {tasks.map((task) => (
      <Item key={task.id} hidden={task.done && hideDone}>
        <Button
          toggleStatus
          onClick={() => toggleTaskDone(task.id)}
        >
          {task.done ? "✔" : ""}
        </Button>
        <TaskContent done={task.done}>
          {task.content}
        </TaskContent>
        <Button clear onClick={() => removeTask(task.id)}>
          🗑️
        </Button>
      </Item>
    ))}
  </List>
);

export default Tasks;
