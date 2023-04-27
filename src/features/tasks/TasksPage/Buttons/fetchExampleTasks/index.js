import { Button } from "../styled";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "./LoadingSpinner";
import { Wrapper } from "./styled";
import { fetchExampleTasks, selectLoading } from "../../../tasksSlice";

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
