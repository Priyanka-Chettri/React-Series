import React from 'react'
import { useEffect, useState } from 'react';
import UserContext from './UserContext';

const UserContextProvider=({children})=>{
  const [task, setTask] = useState("");
  const [tasksList, setTaskList] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
  
      if (storedTasks) {
        setTaskList(JSON.parse(storedTasks));
      } else {
        // Initialize local storage with an empty array
        localStorage.setItem('tasks', JSON.stringify([]));
      }}, []);

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
          const updatedTaskList = prevTaskList.filter((task) => task.id !== index); 
         saveTasksToLocalStorage(updatedTaskList); 
          return updatedTaskList; 
        });
        console.log(tasksList)
      };

      const saveTask=(index, newTask)=>{
        const updatedTasks = [...tasksList];
        updatedTasks[index] = newTask;
        setTaskList(updatedTasks);
      }

  return (  
    <UserContext.Provider value={{
      task,
      setTask,
      tasksList,
      setTaskList,
      handleAddButton,
      deleteTask,
      saveTask,}}>
    {children}
    </UserContext.Provider>
   )
}

export default UserContextProvider