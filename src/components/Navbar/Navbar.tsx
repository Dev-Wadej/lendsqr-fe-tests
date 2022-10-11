import React from 'react'
import { Outlet } from 'react-router-dom'
import './Navbar.scss'

import Sidebar from '../Sidebar/Sidebar'

//============================SVG's =============================================
import {ReactComponent as CompanyLogo} from '../../data/svgs/companyLogo.svg'
import {ReactComponent as Search} from '../../data/svgs/search.svg'
import {ReactComponent as ArrowDown} from '../../data/svgs/arrowdown.svg'
import Human from '../../data/images/human.jpg'
import {ReactComponent as Bell} from '../../data/svgs/bell.svg'
import { Cancel } from '@mui/icons-material'
//=================================================================================

//============================custom hooks============================================================
import { useSidebar } from '../../context/ContextProvider'


const Navbar = () => {
  const [showInput, setShowInput]= React.useState(false)
  const {screenSize}= useSidebar()

  const handleOpenSearch=()=>{
    if(screenSize!==null && screenSize!<=900){
      setShowInput(true)
    }
  }
  const handleCloseSearch=()=>{
    setShowInput(false)
  }

  // React.useEffect(()=>{
  //   if(screenSize!==null && screenSize!<=900){
  //     setShowInput(true)
  //     console.log('Got here')
  //   }

  // },[screenSize])
  return (
      <>
      <nav className='navbar-top'>
        <div className='nav-logo'>
          <CompanyLogo/>
        </div>
        <div className='nav-elements'>
            {showInput &&<>  <input id='show-small-device' type="text" placeholder='Search For Anything' /><Cancel onClick={handleCloseSearch} sx={{opacity:'70%', width:'3rem'}}/>   </> }

            {!showInput  &&<>
          <div>
            <input type="text" placeholder='Search For Anything' />
            <span>
            <Search onClick={handleOpenSearch}/>
              </span>
          </div>
          
          <ul className='navbar-ul'>
            <li><a href="#">Docs</a></li>
            <li><Bell/></li>
            <li> 
              <img src={Human} alt="The User's thumbnail" /> 
               <span> Adedeji </span>
              <span><ArrowDown/></span>
            </li>
            
          </ul>
            </>
          }

        </div>
      </nav>
      <Sidebar/>

      <Outlet/>
      </>

  )
}

export default Navbar
