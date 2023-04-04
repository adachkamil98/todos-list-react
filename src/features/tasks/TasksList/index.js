import { useSelector, useDispatch } from "react-redux";
import {
  selectTasks,
  toggleTaskDone,
  removeTask,
  selectHideDone,
} from "../tasksSlice.js";
import { List, Item, TaskContent, Button } from "./styled.js";

const TasksList = () => {
  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <Button toggleStatus onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✔" : ""}
          </Button>
          <TaskContent done={task.done}>{task.content}</TaskContent>
          <Button clear onClick={() => dispatch(removeTask(task.id))}>
            🗑️
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TasksList;
