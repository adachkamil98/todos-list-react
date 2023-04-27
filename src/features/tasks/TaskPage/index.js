import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Container from "../../../common/Container";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";
import { TaskInfo } from "./styled";

const TaskPage = () => {
  const { id } = useParams();
  const task = useSelector((state) => getTaskById(state, id));

  return (
    <Container>
      <Header title="Szczegóły zadania" />
      <Section
        title={task ? task.content : "Nie znaleziono zadania"}
        body={
          <TaskInfo>
            <strong>Ukończono: </strong> {task.done ? "tak" : "nie"}
          </TaskInfo>
        }
      />
    </Container>
  );
}

export default TaskPage;
