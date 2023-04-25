import { Wrapper, Button } from "./styled.js";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleHideDone,
  setAllTasksAsDone,
  selectAreTasksEmpty,
  selectIsEveryTaskDone,
  selectHideDone,
} from "../features/tasks/tasksSlice.js";

const Buttons = () => {
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    <Wrapper>
      {!areTasksEmpty && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            onClick={() => dispatch(setAllTasksAsDone())}
            disabled={isEveryTaskDone}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </Wrapper>
  );
};

export default Buttons;
