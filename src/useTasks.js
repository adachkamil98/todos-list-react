import { useState, useEffect } from "react";

const getInitialTasks = () => {
  const tasksFromLocalStorage = localStorage.getItem("todos");

  return tasksFromLocalStorage ? JSON.parse(tasksFromLocalStorage) : [];
};

export const useTasks = () => {
  const [tasks, setTasks] = useState(getInitialTasks);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(tasks));
  }, [tasks]);

  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => (task.id === id ? { ...task, done: !task.done } : task))
    );
  };

  const setAllTasksAsDone = () => {
    setTasks((tasks) =>
      tasks.map((task) => ({
        ...task,
        done: true,
      }))
    );
  };

  const addNewTask = (newTaskContent) => {
    setTasks((tasks) => [
      ...tasks,
      {
        content: newTaskContent,
        done: false,
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      },
    ]);
  };

  return {
    tasks,
    removeTask,
    toggleTaskDone,
    setAllTasksAsDone,
    addNewTask,
  };
};
