import React, { useState, useEffect } from "react";
import styles from "@/components/TodoList/TodoList.module.css";
import TodoItem from "@/components/TodoItem/TodoItem";
import { ITodoListProps, ITodoList, IFormData } from "@/store/TodoList/types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function TodoList(props: ITodoListProps) {
  const { todos, loading, error, addTask, removeTask, editTask, fetchTasks } = props;

  const schema = yup.object().shape({
    Task: yup
      .string()
      .required("Input cannot be empty")
      .min(8, "Task should have at least 8 characters")
      .matches(/^[^0-9]*$/, "Field should not contain numbers"),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    fetchTasks();
  }, []);

  const addListHandler = (data: IFormData): void => {
    addTask(todos.length + 1, data.Task);
    setValue("Task", "");
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
      {errors.Task && <p>{errors.Task.message}</p>}
      <form onSubmit={handleSubmit((data) => addListHandler(data))}>
        <input
          className={styles.input}
          type="text"
          placeholder="Input task name and press enter to add"
          {...register("Task")}
        />
      </form>
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
