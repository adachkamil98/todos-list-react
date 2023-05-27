import { useSelector, useDispatch } from "react-redux";
import {
  toggleTaskDone,
  removeTask,
  selectHideDone,
  selectTasksByQuery,
} from "../../tasksSlice.js";
import { List, Item, TaskContent, Button } from "../styled.js";
import { TaskLink } from "./styled.js";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min.js";
import searchQueryParamName from "../searchQueryParamName.js";
import { toTask } from "../../../../routes.js";

const TasksList = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get(searchQueryParamName);

  const tasks = useSelector((state) => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <Button toggleStatus onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✔" : ""}
          </Button>
          <TaskContent done={task.done}>
            <TaskLink to={toTask({ id: task.id })}>{task.content}</TaskLink>
          </TaskContent>
          <Button clear onClick={() => dispatch(removeTask(task.id))}>
            🗑️
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TasksList;
