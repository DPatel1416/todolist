import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <div className="Todo">
        {/* Task content with conditional class based on completion status */}
        <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
        <div>
            {/* Edit icon */}
            <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => editTodo(task.id)} />
            {/* Delete icon */}
            <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTodo(task.id)} />
        </div>
    </div>
  );
};
