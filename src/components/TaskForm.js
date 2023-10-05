import React, { useState } from "react";
import '../stylesheets/taskform.css';
import { v4 as uuidv4 } from 'uuid';



function TaskForm(props) {

  const [input, setInput] = useState('');

  const changeHandle = e => {
    setInput(e.target.value);
  }

  const sendHandle = e => {
    e.preventDefault();
    
    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false
    };

    props.onSubmit(newTask);

  }


  return (
    <form 
      className='task-form'
      onSubmit={sendHandle}>
      <input 
        className='task-input'
        type='text'
        placeholder='Type yout task'
        name='text'
        onChange={changeHandle}
      />
      <button className='task-button'>
        Add Task
      </button>
    </form>
  )
}


export default TaskForm;