import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import TasksList from './TasksList'
import AppFile from './AppFile'


function AppMain() {
  return (
   <UserContextProvider>
    <AppFile/>
    <TasksList/>
   </UserContextProvider>
  )
}

export default AppMain