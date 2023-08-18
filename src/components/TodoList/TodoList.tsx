import React, { useState, useEffect } from "react";
import styles from "@/components/TodoList/TodoList.module.css";
import TodoItem from "@/components/TodoItem/TodoItem";
import { ITodoListProps, ITodoList } from "@/store/TodoList/types";

function TodoList(props: ITodoListProps) {
  const { todos, loading, error, addTask, removeTask, editTask, fetchTasks } = props;
  const [taskInput, setTaskInput] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const addListHandler = (key: string): void => {
    if (key == "Enter") {
      addTask(todos.length + 1, taskInput);
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
        {loading ? (
          error ? (
            <h3>{error}</h3>
          ) : (
            <h1>Loading...</h1>
          )
        ) : (
          todos.map((todoItem: ITodoList) => (
            <TodoItem
              key={todoItem.id}
              keyId={todoItem.id}
              value={todoItem.todo}
              completed={todoItem.completed}
              editListHandler={editListHandler}
              removeListHandler={removeListHandler}
            />
          ))
        )}
      </ul>
    </div>
  );
}

export default TodoList;
