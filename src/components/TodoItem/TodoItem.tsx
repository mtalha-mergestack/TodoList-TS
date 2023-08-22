import React, { useState } from "react";
import styles from "src/components/TodoList/TodoList.module.css";
import { ITodoItemProps } from "src/store/TodoList/types";

function TodoItem(props: ITodoItemProps) {
  const { taskId, value, completed, editTaskHandler, removeTaskHandler } = props;

  const [editTaskInput, setEditTaskInput] = useState(value);
  const [isCompleted, setIsCompleted] = useState(completed);
  const [isEditing, setIsEditing] = useState(false);

  const editTask = (key: string, index: number, value: string): void => {
    if (key == "Enter" && !isCompleted) {
      editTaskHandler(index, value);
      setIsEditing(false);
    }
  };

  return (
    <li key={taskId}>
      {isEditing || (
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={(event) => setIsCompleted(event.target.checked)}
        />
      )}
      <span className={`${isCompleted && styles.completed}`}>
        {isEditing ? (
          <input
            id={taskId}
            type="text"
            value={editTaskInput}
            onChange={(event) => setEditTaskInput(event.target.value)}
            onKeyDown={(event) => editTask(event.key, event.target.id, event.target.value)}
          />
        ) : (
          value
        )}
      </span>
      {isCompleted || (
        <i onClick={() => setIsEditing(!isEditing)} className={`fa fa-edit ${styles.right}`}></i>
      )}
      <i
        id={taskId}
        className={`fa fa-trash ${styles.right}`}
        onClick={(event) => removeTaskHandler(event.target.id)}
      ></i>
    </li>
  );
}

export default TodoItem;
