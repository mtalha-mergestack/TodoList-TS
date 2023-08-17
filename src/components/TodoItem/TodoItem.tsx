import React, { useState } from "react";
import styles from "@/components/TodoList/TodoList.module.css";

type todoItemProps = {
  keyId: number;
  value: number;
  editListHandler: (index: number, value: string) => void;
  removeListHandler: (index: number) => void;
};

function TodoItem(props: todoItemProps) {
  const { keyId, value, editListHandler, removeListHandler } = props;

  const [editTaskInput, setEditTaskInput] = useState(value);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const editTask = (key: string, index: number, value: string): void => {
    if (key == "Enter" && isCompleted != true) {
      editListHandler(index, value);
      setIsEditing(false);
    }
  };

  const completed = (isChecked: boolean): void => {
    isChecked ? setIsCompleted(true) : setIsCompleted(false);
  };

  return (
    <li key={keyId}>
      {isEditing || <input type="checkbox" onClick={(event) => completed(event.target.checked)} />}
      <span className={`${isCompleted ? styles.completed : ""}`}>
        {isEditing ? (
          <input
            id={keyId}
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
        <i
          onClick={() => {
            setIsEditing(!isEditing);
          }}
          className={`fa fa-edit ${styles.right}`}
        ></i>
      )}
      <i
        id={keyId}
        className={`fa fa-trash ${styles.right}`}
        onClick={(event) => removeListHandler(event.target.id)}
      ></i>
    </li>
  );
}

export default TodoItem;
