import React from 'react'
import { Outlet } from 'react-router-dom'
import './Navbar.scss'
import {ReactComponent as CompanyLogo} from '../../data/svgs/companyLogo.svg'
import {ReactComponent as Search} from '../../data/svgs/search.svg'
import {ReactComponent as ArrowDown} from '../../data/svgs/arrowdown.svg'
import Human from '../../data/images/human.jpg'
import {ReactComponent as Bell} from '../../data/svgs/bell.svg'
import Sidebar from '../Sidebar/Sidebar'

const Navbar = () => {
  return (
      <>
      <nav>
        <div className='nav-logo'>
          <CompanyLogo/>
        </div>
        <div className='nav-elements'>
          <div>
            <input type="text" placeholder='Search For Anything' />
            <span>
            <Search/>
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

        </div>
      </nav>
      <Sidebar/>

      <Outlet/>
      </>

  )
}

export default Navbar
