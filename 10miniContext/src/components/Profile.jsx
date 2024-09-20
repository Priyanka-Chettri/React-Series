import {React, useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
const {user}=useContext(UserContext)
if(user==null) return <div>
   Please log in
   </div>

  return (
    <div>Welcome</div>
  )
}

export default Profile