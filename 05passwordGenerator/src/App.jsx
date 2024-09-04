import { useState , useCallback} from "react"

function App() {

  const [length, setlength]= useState(8);
  const [numberAllowed, setNumberAllowed]= useState(false);
  const [charAllowed, setCharAllowed]= useState(false);
  const [password, setPassword]=useState("")

  const  passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed){
      str+="0123456789"
    }
    if(charAllowed){
      str+="!@#%^&*-+=[]{}~`"
    }

    for (let i=1; i<=Array.length;i++){

    }


  }, [length, numberAllowed, charAllowed, setPassword])
  


  return (
    <>
    <h1 className="bg-yellow-500 text-center text-xl text-white">
      Password Generatorssssssss
    </h1>
    </>
  )
}

export default App
