import React, { useEffect } from "react";
import styles from "src/components/TodoList/TodoList.module.css";
import TodoItem from "src/components/TodoItem/TodoItem";
import { ITodoListProps, IFormData } from "src/store/TodoList/types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { todoSchema } from "src/utils/schema";

function TodoList(props: ITodoListProps) {
  const { todos, loading, error, addTask, removeTask, editTask, fetchTasks } = props;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(todoSchema),
  });

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const addTaskHandler = (data: IFormData): void => {
    addTask(data.Task);
    reset();
  };

  const removeTaskHandler = (index: number): void => {
    removeTask(index);
  };

  const editTaskHandler = (index: number, value: string): void => {
    editTask(index, value);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>My Todo</h1>
      <form onSubmit={handleSubmit((data) => addTaskHandler(data))}>
        <input
          className={styles.input}
          type="text"
          placeholder="Input task name and press enter to add"
          {...register("Task")}
        />
        {errors.Task && <p className={styles.error}>{errors.Task.message}</p>}
      </form>
      <hr />
      <ul className={styles.listContainer}>
        {loading ? (
          <h1>Loading</h1>
        ) : (
          todos.map((todoItem) => (
            <TodoItem
              key={todoItem._id}
              taskId={todoItem._id}
              value={todoItem.todo}
              completed={todoItem.completed}
              editTaskHandler={editTaskHandler}
              removeTaskHandler={removeTaskHandler}
            />
          ))
        )}
        {error && <h1>{error.message}</h1>}
      </ul>
    </div>
  );
}

export default TodoList;
