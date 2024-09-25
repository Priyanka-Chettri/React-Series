import Me from "./Components/Me";
import Myexp from "./Components/Myexp";
import MySkills from "./Components/MySkills";
import Navigation from "./Components/Navigation"
import { BrowserRouter } from 'react-router-dom';



function App() {

  return (
    <>
     <BrowserRouter>
     <Navigation/>
     <div className="bg-pink-400">
     <Me/>
     <MySkills/>
     <Myexp/>
     </div>
     
     </BrowserRouter>
    
    </>
  )
}

export default App
