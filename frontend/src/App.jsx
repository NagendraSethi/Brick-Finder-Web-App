import Navbar from './components/navbar/Navbar'
import './layout.scss'
import HomePage from './pages/homePage/HomePage'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {  
  const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
        ]
    }
  ]);
  return (
    <div className="layout">
      <div className='navbar'>
        <Navbar/>
      </div>
      <div className='content'>
        <HomePage/>
      </div>
    </div>
  )
}

export default App;