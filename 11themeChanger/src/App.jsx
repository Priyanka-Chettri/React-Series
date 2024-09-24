import React, {useState, useEffect} from 'react'
import Button1 from './Button1';


function App() {
  const [theme, setTheme]=useState("light")
  const handletheme=()=>{
    setTheme(theme === 'light' ? 'dark' : 'light');
  }
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);
  return (
    <>
    <div className='w-screen h-screen justify-center items-center flex dark:bg-gray-500'>
       <div className='flex flex-col gap-3'>
        <h1 className='font-bold text-[24px]'>Hey {theme} mode!</h1>
        <button className='bg-blue-400 p-4 rounded-lg dark:bg-pink-600' onClick={handletheme}>{theme==="light"?"Dark mode" :  "Light mode"}</button>
        <Button1/>
       </div>
    </div>
      
    </>
  )
}

export default App
