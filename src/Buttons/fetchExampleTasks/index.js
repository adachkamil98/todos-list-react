import { Button } from "../styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectLoading } from "../../features/tasks/tasksSlice";
import { Spinner } from "./LoadingSpinner";
import { Wrapper } from "./styled";

const FetchExampleTasksButton = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  return (
    <Button onClick={() => dispatch(fetchExampleTasks())} disabled={loading}>
      {loading ? (
        <Wrapper>
          <Spinner />
          {"Loading"}
        </Wrapper>
      ) : (
        "Pobierz przykładowe zadania"
      )}
    </Button>
  );
};

export default FetchExampleTasksButton;
