import { useState , useCallback, useEffect, useRef} from "react"

function App() {

  const [length, setlength]= useState(8);
  const [numberAllowed, setNumberAllowed]= useState(false);
  const [charAllowed, setCharAllowed]= useState(false);
  const [password, setPassword]=useState("")
  const [copyButton, setCopyButton]=useState("Copy")

  //refHook
  const passwordRef=useRef(null)

 //copy password to clipboard
const copyPasswordToClipboard=()=>{
  passwordRef.current?.select()
  window.navigator.clipboard.writeText(password)
  changeCopyButtonText()
}

function changeCopyButtonText(){
  setCopyButton("Copied");
  }
//password generator function with useCallback
const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed){
      str+="0123456789"
    }
    if(charAllowed){
      str+="!@#%^&*-+=[]{}~`"
    }

    for (let i=1; i<=length;i++){
       let char=Math.floor(Math.random()*str.length+1)
       pass+=str.charAt(char);
    }
    setPassword(pass)
    console.log(pass)


  }, [length, numberAllowed, charAllowed, setPassword])
  
 useEffect(()=>{
  passwordGenerator()
}, [length, numberAllowed, charAllowed])


  return (
    <>
    <div className="bg-gray-600 text-xl font-bold mt-20 w-fit mx-auto p-3 flex flex-col items-center justify-center shadow-md rounded-md gap-10">
      <p className="text-yellow-500 text-4xl">Password Generator</p>
      <div className="flex gap-4">
        <input 
        type="text"
        value={password}
        placeholder="Password"
        readOnly
        className="outline-none shadow-md rounded-md w-full p-3 "
        ref={passwordRef}
        />
        <button className="min-w-[100px] border border-yellow-500 p-1 rounded-md bg-yellow-500" onClick={()=>copyPasswordToClipboard()} >{copyButton}</button> 
      </div>
      <div className="flex gap-5">
        <input type="range" min={2} max={25} className="cursor-pointer" value={length} onChange={(e)=>{setlength(e.target.value)}}></input>
        <p className="text-yellow-500">Length({length})</p>
        <label className="text-yellow-500 flex space-x-2 ">
        <input type="checkbox" onChange={(e)=>setNumberAllowed((prev)=>!prev)} ></input>
        <span> Numbers</span>
       
        </label>
        <label className="text-yellow-500 flex space-x-2">
          <input type="checkbox" onChange={(e)=>setCharAllowed((prev)=>!prev)}>
          </input>
          <span> Characters</span>
         
        </label>
       
      </div>
    </div>
    
    </>
  )
}

export default App
