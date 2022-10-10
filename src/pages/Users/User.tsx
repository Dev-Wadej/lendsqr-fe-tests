import {useState} from 'react'
//============== Custom hooks======================================
import {useGetUsersQuery} from '../../features/api/apiSlice'
import {useSidebar } from '../../context/ContextProvider'
import { useUsersPagination } from '../../hooks/useUsersPagination'
//=================================================================

//========================= SVG======================================
import {ReactComponent as Users} from '../../data/svgs/users.svg'
import {ReactComponent as ActiveUsers} from '../../data/svgs/activeusers.svg'
import {ReactComponent as UsersWithLoan} from '../../data/svgs/userswithloan.svg'
import {ReactComponent as UsersWithSavings} from '../../data/svgs/userswithsavings.svg'
import {ReactComponent as DropDown} from '../../data/svgs/dropdown.svg'
//=================================================================

//========================= Component======================================
import EachUser from '../../components/EachUser/EachUser'
import FormDropDown from '../../components/FormDropDown/FormDropDown'
import MenuIcon from '@mui/icons-material/Menu';
import PaginationRounded from '../../components/Pagination/Pagination'
//======================================================================

import './user.scss'

const User = () => {

  const {setSidebar,sidebar,pageNo}=useSidebar()
  const [showFilterForm,setShowFilterForm]=useState(false)
  

  const { data, isLoading,isError } = useGetUsersQuery(true)
  const res=useUsersPagination?.(data!,pageNo)  
    
  const handleOpenSideBar=()=>{
    setSidebar?.(true)
  }
 
  const handleToggleFilterForm=()=>{
    setShowFilterForm((prev)=>!prev)
  }
  if(isLoading){
    return(
      <div>Loading</div>
    )
  }
  if(isError){
    return(
      <div>Error Messgae</div>
    )
  }

  return (
    <section className='all-users'>
      <div onClick={handleOpenSideBar}>
      { !sidebar ? <MenuIcon className='menu'/> : <></>}
      </div>
      <h2>Users</h2>
      <ul className='users-box'>
        <li>
          <span className='user-box-icon'> <Users/></span>
          <span className='users-box-title'>USERS</span>
          <span className='users-box-amount'>2,453</span>
        </li>
        <li>
          <span className='user-box-icon'> <ActiveUsers/></span>
          <span className='users-box-title'>ACTIVE USERS</span>
          <span className='users-box-amount'>2,453</span>
        </li>
        <li>
          <span className='user-box-icon'> <UsersWithLoan/></span>
          <span className='users-box-title'>USERS WITH LOANS</span>
          <span className='users-box-amount'>12,453</span>
        </li>
        <li>
          <span className='user-box-icon'> <UsersWithSavings/></span>
          <span className='users-box-title'>USERS WITH SAVINGS</span>
          <span className='users-box-amount'>102,453</span>
        </li>
      </ul>
      <div className='main-dashboard-wrapper'>

      <ul className='main-dashboard'>
        {showFilterForm &&
        <FormDropDown/>
        }
          <li onClick={handleToggleFilterForm}>
            <span>ORGANIZATION</span>
            <span><DropDown/></span>
          </li>
          <li onClick={handleToggleFilterForm}>
            <span>USERNAME</span>
            <span><DropDown/></span>
          </li>
          <li onClick={handleToggleFilterForm}>
            <span>EMAIL</span>
            <span><DropDown/></span>
          </li>
          <li onClick={handleToggleFilterForm}>
            <span>PHONE NUMBER</span>
            <span><DropDown/></span>
          </li>
          <li onClick={handleToggleFilterForm}>
            <span>DATE JOINED</span>
            <span><DropDown/></span>
          </li>
          <li onClick={handleToggleFilterForm}>
            <span>STATUS</span>
            <span><DropDown/></span>
          </li>
      </ul>
      <div className='status-down-wrapper'>
      {res?.amtPerPage?.map((eachUserDetails,idx)=>(
          <EachUser key={idx} data={eachUserDetails} />
      ))}
 </div>
      </div>
      <PaginationRounded totalPage={res?.totalPages}/>

    </section>
  )
}

export default User
