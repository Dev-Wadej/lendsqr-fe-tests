import React,{useEffect,useState} from 'react'
import {ReactComponent as ArrowDown} from '../../data/svgs/arrowdown2.svg'
import {ReactComponent as Briefcase} from '../../data/svgs/briefcase.svg'
import {ReactComponent as Home} from '../../data/svgs/home.svg'
import { customers,businesses,settings } from '../../data/dummydata'
import CloseIcon from '@mui/icons-material/Close';
import { useSidebar } from '../../context/ContextProvider' 
import './Sidebar.scss'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    const {sidebar,setSidebar,setScreenSize,screenSize}=useSidebar()
    const [closeBtn,setCloseBtn]=useState(true)
    
    const handleClick=()=>{
        setSidebar?.(false)
    }
    useEffect(()=>{

            if(screenSize !==null){
                screenSize!<1000 ? setSidebar?.(false) :setSidebar?.(true)
                console.log('got here')
            }

            const handleResize=()=>setScreenSize?.(window.innerWidth);
            window.addEventListener('resize',handleResize)
            handleResize()
            return ()=> window.removeEventListener('resize',handleResize)
    
        },[screenSize, setScreenSize, setSidebar])

        useEffect(()=>{
            if(screenSize!==null){
                if(screenSize! > 1000  ){
                        setCloseBtn(false)
                }
                if(screenSize! <1000  ){
                    setCloseBtn(true)
            }
            }
        },[screenSize,sidebar])
  return(
      <>
      {sidebar && ( <section className='sidebar'>
    <div className='close' onClick={handleClick}>
        {
            closeBtn &&

<CloseIcon />
        }
</div>
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
</section>)}
      </>
    
  )
    
    
  
}

export default Sidebar
