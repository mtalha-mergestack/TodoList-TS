import React, { useState } from "react";
import styles from "@/components/TodoList/TodoList.module.css";
import TodoItem from "@/components/TodoItem/TodoItem";

type TodoListProps = {
  todos: string[];
  addTask: (text: string) => void;
  removeTask: (index: number) => void;
  editTask: (index: number, value: string) => void;
};
function TodoList(props: TodoListProps) {
  const { todos, addTask, removeTask, editTask } = props;
  const [taskInput, setTaskInput] = useState("");

  const addListHandler = (key: string): void => {
    if (key == "Enter") {
      addTask(taskInput);
      setTaskInput("");
    }
  };

  const removeListHandler = (index: number): void => {
    removeTask(index);
  };

  const editListHandler = (index: number, value: string): void => {
    editTask(index, value);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>My Todo</h1>
      <input
        className={styles.input}
        value={taskInput}
        type="text"
        placeholder="Input task name and press enter to add"
        onChange={(event) => setTaskInput(event.target.value)}
        onKeyDown={(event) => addListHandler(event.key)}
      />
      <hr />
      <ul className={styles.listContainer}>
        {todos.map((val: string, i: number) => (
          <TodoItem
            key={i}
            keyId={i}
            value={val}
            editListHandler={editListHandler}
            removeListHandler={removeListHandler}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
