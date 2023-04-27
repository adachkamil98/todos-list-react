import Form from "./Form";
import Buttons from "../../../Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import TasksList from "./TasksList";
import FetchExampleTasksButton from "../../../Buttons/fetchExampleTasks/index.js";
import Search from "./Search";


const TasksPage = () => {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        extraHeaderContent={<FetchExampleTasksButton />}
        body={<Form />}
      />
      <Section
        title="Wyszukiwarka"
        body={<Search />}
      />
      <Section
        title="Lista zadań"
        body={<TasksList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage;
