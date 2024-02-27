import React, { useState } from 'react';

export const EditTodoForm = ({ editTodo, task }) => {
    // State to store the edited value of the task
    const [value, setValue] = useState(task.task);

    // Function to handle form submission
    const handleSubmit = (e) => {
        // Prevent the default form submission behavior
        e.preventDefault();
        // Call the editTodo function to edit the task
        editTodo(value, task.id);
    };

    return (
        <form onSubmit={handleSubmit} className="TodoForm">
            {/* Input field for editing the task */}
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="todo-input"
                placeholder='Update task'
            />
            {/* Submit button */}
            <button type="submit" className='todo-btn'>Update Task</button>
        </form>
    );
};
