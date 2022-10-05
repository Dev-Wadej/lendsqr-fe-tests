import React from 'react'
import {ReactComponent as ArrowDown} from '../../data/svgs/arrowdown2.svg'
import {ReactComponent as Briefcase} from '../../data/svgs/briefcase.svg'
import {ReactComponent as Home} from '../../data/svgs/home.svg'
import { customers,businesses,settings } from '../../data/dummydata'
import './Sidebar.scss'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <section className='sidebar'>
        <div className='sidebar-top'>
            <span><Briefcase/></span>
            <span>Switch Organization</span>
            <span><ArrowDown/></span>
        </div>
        <div className='sidebar-dashboard sidebar-top'>
            <span><Home/></span>
            <p>Dashboard</p>
        </div>
        <div className='sidebar-links'>
        <h4 >{customers.title.toUpperCase()}</h4>
        {customers.links.map((customerslink,idx)=>(
            <NavLink key={idx} className={'sidebar-links-each'} id={customerslink?.id} to={'#'}> 
                 <span><customerslink.icons/></span>
                 <span className='sidebar-links-eaches'>{customerslink.name}</span>
            </NavLink>
        ))}
        </div>

        <div className='sidebar-links'>
        <h4 >{businesses.title.toUpperCase()}</h4>
        {businesses.links.map((businesseslink,idx)=>(
            <NavLink key={idx} className={'sidebar-links-each'}  to={'#'}> 
                 <span><businesseslink.icons/></span>
                 <span className='sidebar-links-eaches'>{businesseslink.name}</span>
            </NavLink>
        ))}
        </div>

        <div className='sidebar-links'>
        <h4 >{settings.title.toUpperCase()}</h4>
        {settings.links.map((settingslink,idx)=>(
            <NavLink key={idx} className={'sidebar-links-each'}  to={'#'}> 
                 <span><settingslink.icons/></span>
                 <span className='sidebar-links-eaches'>{settingslink.name}</span>
            </NavLink>
        ))}
        </div>
      
    </section>
  )
}

export default Sidebar
