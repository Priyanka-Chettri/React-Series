import { NavLink } from "react-router-dom"
import NavBar from "./components/NavBar"
import { Outlet } from "react-router-dom"


function App() {
  return (
    <>
   <NavBar/>
   <Outlet/>   
    </>
  )
}

export default App
