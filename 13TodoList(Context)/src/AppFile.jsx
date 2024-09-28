import { useContext } from 'react'
import UserContext from './context/UserContext'
import TasksList from './TasksList';


function AppFile() {

  const { task, setTask, tasksList, handleAddButton } = useContext(UserContext);
  return (
    <>
    <div className='w-screen h-screen flex justify-center '>
    <div className='w-1/3 mt-[100px]'>
      <h1 className='text-[30px] font-bold text-center'>
        TaskTrek
      </h1>
      <div className='flex mt-[100px]'>
      <input type="text"  value={task} placeholder='Add your to-do' className='border rounded-sm border-t border-l border-b border-black w-full h-12 text-center relative' onChange={(e)=>{
        setTask(e.target.value)
      }} />
      <button className='bg-blue-400  text-center px-5 border-t border-r border-b border-black rounded-sm' onClick={handleAddButton}>Add</button>
      </div>
     {/* Map here */}
    {tasksList && tasksList.map((taskItem)=>{

      return <TasksList task={taskItem.task} key={taskItem.id} idx={taskItem.id} />
    })}  
    </div> 
    </div>  
    </>
  )
}

export default AppFile
