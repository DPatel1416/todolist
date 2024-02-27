import React, { useState } from 'react';

export const TodoForm = ({ addTodo }) => {
    // State to store the value of the input field
    const [value, setValue] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        // Prevent the default form submission behavior
        e.preventDefault();
        // Check if the value is not empty
        if (value) {
            // Call the addTodo function to add a new todo
            addTodo(value);
            // Clear the input field after submission
            setValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="TodoForm">
            {/* Input field for entering todo task */}
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="todo-input"
                placeholder='What is the task today?'
            />
            {/* Submit button */}
            <button type="submit" className='todo-btn'>Add Task</button>
        </form>
    );
};
