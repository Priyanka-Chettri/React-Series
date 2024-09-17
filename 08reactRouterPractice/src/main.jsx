import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AboutMe from './components/AboutMe.jsx'
import ContactMe from './components/ContactMe.jsx'
import Skills from './components/Skills.jsx'


//creation of a router
const router=createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {
        path:"/",
        element:<AboutMe/>
      },
      {
        path:"skills",
        element:<Skills/>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
 </StrictMode>
)
