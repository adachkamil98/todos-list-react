import { Wrapper, Button } from "./styled.js";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllTasksAsDone }) => (
  <Wrapper>
    {tasks.length > 0 && (
      <>
        <Button onClick={toggleHideDone}>
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </Button>
        <Button 
        onClick={setAllTasksAsDone} 
        disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </Button>
      </>
    )}
  </Wrapper>
);

export default Buttons;
