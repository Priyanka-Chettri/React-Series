
import { useState } from "react";

function App(){

  let [counter, setCounter]=useState(15)
  //let counter=15;

  const addValue= ()=>{
    counter+=1;
    setCounter(counter)
    console.log("clicked on add value", counter)

  }

 const removeValue= ()=>{
    counter-=1
    if(counter<0) setCounter(0)
    else
      setCounter(counter)
    console.log("clicked on remove value", counter)

  }

  return (
    <>
    <h1>Chai aur react | 02counter</h1>
    <h2>Counter value: {counter}</h2>

    <button 
    onClick={addValue}
    >Add Value</button>
    <br/>
    <br/>

    <button 
    onClick={removeValue}
    >Remove value</button>
    </>
  )
}

export default App
