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

  const dashboardFilterActions= ['ORGANIZATION','USERNAME','EMAIL','PHONE NUMBER','DATE JOINED','STATUS']
  const boxesProperties = [
    {name:'USERS', icon:Users, amount:'2,453'},
    {name:'ACTIVE USERS',icon:ActiveUsers, amount:'2,453'},
    {name:'USERS WITH LOAN', icon:UsersWithLoan, amount:'12,453'},
    {name:'USERS WITH SAVINGS', icon:UsersWithSavings, amount:'102,453'},
  ]

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
          {boxesProperties.map(dataBoxesProp=>(
            <li>
            <span className='user-box-icon'> <dataBoxesProp.icon/></span>
            <span className='users-box-title'>{dataBoxesProp.name}</span>
            <span className='users-box-amount'>{dataBoxesProp.amount}</span>
            </li>

          ))}
      </ul>
      <div className='main-dashboard-wrapper'>

      <ul className='main-dashboard'>
        {showFilterForm &&
        <FormDropDown/>
        }
        {dashboardFilterActions.map(callToAction=>(
          <li onClick={handleToggleFilterForm}>
          <span>{callToAction}</span>
          <span><DropDown/></span>
          </li>
        ))}
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
