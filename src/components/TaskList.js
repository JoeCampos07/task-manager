import React, { useState } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";
import '../stylesheets/tasklist.css'


function TaskList() {

  const [tasks, setTask] = useState([]);

  const addTask = task => {
    if(task.text.trim()) {
      task.text = task.text.trim()
      const updatedTasks = [task, ...tasks]
      setTask(updatedTasks)
    };
  }

  const deleteTask = id => {
    const updatedTasks = tasks.filter(task => task.id !== id)
    setTask(updatedTasks);
  }

  const completeTask = id => {
    const updatedTasks = tasks.map(task => {
      if(task.id === id) {
        task.completed = !task.completed
      }
      return task;
    });
    setTask(updatedTasks)
  }

  return (
    <>
      <TaskForm onSubmit={addTask}/>
      <div className='task-list-container'>
        {
          tasks.map((task) => 
          <Task 
          key={task.id}
          id={task.id}
          text={task.text}
          completed={task.completed} 
          deleteTask={deleteTask} 
          completeTask={completeTask}/>
          )
        }       
      </div>    
    </>
  );
}

export default TaskList;