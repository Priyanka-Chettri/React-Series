import { useState,useEffect } from 'react'

import TasksList from './TasksList';


function App() {
const [task, setTask]= useState("");
const [tasksList, setTaskList]=useState([]);

useEffect(() => {
  const storedTasks = localStorage.getItem('tasks');

    if (storedTasks) {
      setTaskList(JSON.parse(storedTasks));
    } else {
      // Initialize local storage with an empty array
      localStorage.setItem('tasks', JSON.stringify([]));
    }}, tasksList);


const saveTasksToLocalStorage = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};


const handleAddButton=()=>{
 setTaskList((prevtaskList)=>{
  const newTask = { id: Date.now(), task };
  const newtaskList=[...prevtaskList, newTask]
  saveTasksToLocalStorage(newtaskList);
  return newtaskList;
  
 })
 setTask("")
 console.log(tasksList)
}


const deleteTask=(index)=>{
  setTaskList((prevTaskList) => {
    const updatedTaskList = prevTaskList.filter((task) => task.id !== index); // Filter out the task at the specified index
   saveTasksToLocalStorage(updatedTaskList); // Save the updated list to local storage
    return updatedTaskList; // Return the updated task list
  });
  console.log(tasksList)
};

const saveTask=(index, newTask)=>{
  const updatedTasks = [...tasksList];
  updatedTasks[index] = newTask;
  setTaskList(updatedTasks);
}

  return (
    <>
    <div className='w-screen h-screen flex justify-center '>
    <div className='w-1/3 mt-[100px]'>
      <h1 className='text-[30px] font-bold text-center'>
        TaskTrek
      </h1>
      <div className='flex mt-[100px]'>
      <input type="text"  value={task} placeholder='Write Todd..' className='border rounded-sm border-t border-l border-b border-black w-full h-12 text-center relative' onChange={(e)=>{
        setTask(e.target.value)
      }} />
      <button className='bg-blue-400  text-center px-5 border-t border-r border-b border-black rounded-sm' onClick={handleAddButton}>Add</button>
      </div>
     {/* Map here */}
    {tasksList && tasksList.map((taskItem)=>{

      return <TasksList task={taskItem.task} key={taskItem.id} idx={taskItem.id} deleteTask={()=>{deleteTask(taskItem.id)}} saveTask={(newTask)=>{saveTask(taskItem.id, newTask)}} />
    })}
      
    </div> 
    </div>  
    </>
  )
}

export default App
