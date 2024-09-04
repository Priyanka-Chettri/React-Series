import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BgButton from './BgButton'

function App() {
  const [bgcolor, setBgcolor] = useState("white")
   
  function bgFunc(color){
     setBgcolor(color);
  }

  return (
   <>
  <div className='h-screen w-screen' style={{ backgroundColor: bgcolor }}>
    <div className='flex flex-row w-screen gap-5 justify-center items-center fixed bottom-10'>
      <BgButton colourName="pink"   onClick={() => bgFunc("pink")}/>
      <BgButton colourName="blue"   onClick={() => bgFunc("blue")}/>
      <BgButton colourName="purple" onClick={() => bgFunc("purple")}/>
      <BgButton colourName="yellow" onClick={() => bgFunc("yellow")}/>
      <BgButton colourName="orange" onClick={() => bgFunc("orange")}/>
    </div>
  </div>   
  </>
  )
}

export default App
