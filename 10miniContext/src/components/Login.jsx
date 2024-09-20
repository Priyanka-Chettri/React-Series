import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
const [userName, setuserName]= useState('')
const [userPassword, setuserPassword]= useState('')
const {setUser}=useContext(UserContext)

  const handleSubmit=(e)=>{
    e.preventDefault()
    setUser({userName, userPassword})
  }  
  return (
    <div>
        
     <h2>Login</h2>  
     <input type='text' value={userName} onChange={(e)=>{
        setuserName(e.target.value);
     }} placeholder='username'/> 
     <input type='text' value={userPassword} onChange={(e)=>{
        setuserPassword(e.target.value);
     }} placeholder='password'/> 
     <button onClick={handleSubmit}>Submit</button>

    </div>
  )
}

export default Login