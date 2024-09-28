import React, {useState, useContext} from 'react'
import pencil from "./assets/pencil.png"
import deleteIcon from "./assets/delete.png";
import doneIcon from "./assets/done.png";
import UserContext from './context/UserContext';

function TasksList({task, idx}) {

  const { deleteTask, saveTask } = useContext(UserContext);
  const [textStrike, setTextStrike] = useState(false);
  const [iseditable, setIseditable] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

const handleCheckboxChange=()=>{
  setTextStrike((prevtextStrike)=> {
    return !prevtextStrike;
  })
}

const handleEditToggle=()=>{
  setIseditable((prev)=>{
    return !prev;
  })
}

const handleSaveEdit = () => {
  setIseditable(false);
  saveTask(editedTask);

};

  return (
  <div className='mt-10 border border-purple-400 bg-pink-200 p-3 rounded-md flex justify-between items-center '>
        <div className='flex w-[300px]'>
        <input type="checkbox" value="hey" className='' onChange={handleCheckboxChange}/>
        {iseditable ? (<input
                        type="text"
                        value={editedTask}
                        onChange={(e) => setEditedTask(e.target.value)}
                        className="ml-4 w-[250px] border border-gray-300 rounded"
                    />):(<p className={`pl-4 ml-4 w-[250px] text-balance ${textStrike ? 'line-through':""}`} id='taskId' >{editedTask}</p>)}
        </div>
         <div className='flex flex-row w-[100px] gap-3'>
         <button className='flex items-center justify-center w-8 h-8' onClick={iseditable? handleSaveEdit : handleEditToggle }> 
          <img src={iseditable ? doneIcon : pencil}
           className='h-6 w-6'/>
         </button>
         <button className='flex items-center justify-center w-8 h-8 ' onClick={deleteTask}>
          <img src={deleteIcon} className='h-6 w-6'/>
         </button>
        </div>
      </div>
   
  )
}

export default TasksList