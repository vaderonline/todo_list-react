import React, { useState } from 'react';

const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input className="form-xl" value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
            <button className="button-53
            ">Submit</button>
        </form>
    );
};

export default ToDoForm;