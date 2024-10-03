import React, { useState } from 'react'

function ToDoList(){

   const [tasks, setTasks] = useState([]);
   const [newTask, setNewTask] = useState("");

   function handleInputChange(event){
      setNewTask(event.target.value);
   }

   //to add new task
   function addTask(){

      if(newTask.trim() !== ""){
         setTasks(t => [...t, newTask]);
      setNewTask("");
      }

   }

   //to delete task
   function deleteTask(index){

      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
   }

   //to move a task up
   function moveTaskUp(index){

      if(index > 0){
         const updatedTasks = [...tasks];
         [updatedTasks[index], updatedTasks[index - 1]] = 
         [updatedTasks[index - 1], updatedTasks[index]];
         setTasks(updatedTasks);
      }

   }

   //to move a task down
   function moveTaskDown(index){
      if(index < tasks.length - 1){
         const updatedTasks = [...tasks];
         [updatedTasks[index], updatedTasks[index + 1]] = 
         [updatedTasks[index + 1], updatedTasks[index]];
         setTasks(updatedTasks);
      }
   }

   return(<div className="to-do-list">

      <h1>To-Do-List</h1>
      <div>
         <input type="text" placeholder="Enter a task..."  
         value={newTask}
         onChange={handleInputChange}/>

      <button className='add-button'
               onClick={addTask}>Add</button>
      </div>

      <ol>
         {tasks.map((tasks, index) => 
            <li key={index}>
               <span className="text">{tasks}</span>

               <button className='delete-button'
               onClick={() => deleteTask(index)}>DELETE</button>

               <button className='move-button'
               onClick={() => moveTaskUp(index)}>UP</button>

               <button className='down-button'
               onClick={() => moveTaskDown(index)}>DOWN</button>
            </li>  
         )}
      </ol>

   </div>);
}

export default ToDoList