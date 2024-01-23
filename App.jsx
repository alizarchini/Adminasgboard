import { useState } from 'react'
import './App.css'
import Header from './Header'
import Sidbar from './Sidbar'
import Home from './Home'

function App() {

  const [openSidebarToggle, setOpenSidebarToggle] = useState (false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
 

  return (
   <div className='grid-container'>
<Header OpenSidebar={OpenSidebar} />
<Sidbar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
<Home />
   </div>
  )
}

export default App
