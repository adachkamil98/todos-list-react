import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    hideDone: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload }) => {
      tasks.push(payload);
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    toggleTaskDone: ({ tasks }, { payload }) => {
      const index = tasks.findIndex((task) => task.id === payload);
      tasks[index].done = !tasks[index].done;
    },
    removeTask: ({ tasks }, { payload }) => {
      const index = tasks.findIndex((task) => task.id === payload);
      tasks.splice(index, 1);
    },
    setAllTasksAsDone: ({ tasks }) => {
      tasks.map((task) => task.done === false && (task.done = true));
    },
  },
});

export const { addTask, toggleHideDone, toggleTaskDone, removeTask, setAllTasksAsDone } = tasksSlice.actions;
export const selectTasks = ({ tasks }) => tasks;
export default tasksSlice.reducer;
