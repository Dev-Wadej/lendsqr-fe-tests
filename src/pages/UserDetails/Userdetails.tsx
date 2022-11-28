import React,{useEffect} from 'react'
import { useNavigate,useParams} from 'react-router-dom'

import MenuIcon from '@mui/icons-material/Menu';
import './userdetails.scss'

//=========================Custom Hooks====================================
import {useSidebar } from '../../context/ContextProvider'
import { useGetEachUserQuery} from'../../features/api/apiSlice'
import { useLocalStorage } from '../../hooks/useLocalStorage';
//============================================================================

//=========================SVG's==============================================
import {ReactComponent as ArrowBack} from '../../data/svgs/backarrow.svg'
import {ReactComponent as StarFilled} from '../../data/svgs/starfilled.svg'
import {ReactComponent as StarUnfilled} from '../../data/svgs/starunfilled.svg'
//============================================================================

const Userdetails = () => {
  const buttonWords = ['Documents','Bank Details','Loans','Savings','App and System']

  const{sidebar,setSidebar}=useSidebar()

  const navigate= useNavigate() //react-router
  const {id} = useParams() //react-router
  const {data}=useGetEachUserQuery(id!)


  const {setState,state:userCredentials}=useLocalStorage(`user-${id}`)
  const handleOpenSideBar=()=>{
    setSidebar?.(true)
  }
  const handleNavigationUser=()=>{
    navigate('/dashboard/user')
  }
   useEffect(()=>{
     if(!userCredentials){
       setState(data!) // storing to lacal storage
      }
    },[id,data,setState,userCredentials])

//-----Helper To Avoid Too much repetitoion------
  const userdetailsinfo_1= [
    {title:'Full name',title_details:`${userCredentials?.profile?.firstName} ${userCredentials?.profile?.lastName}`},
    {title:'Phone Number',title_details:userCredentials?.profile?.phoneNumber},
    {title:'Email',title_details:userCredentials?.email},
    {title:'Bvn',title_details:userCredentials?.profile?.bvn},
    {title:'Gender',title_details:userCredentials?.profile?.gender},
    {title:'Marital Status',title_details:'Single'},
    {title:'Children',title_details:'None'},
    {title:'Type of Residence',title_details:'Parent’s Apartment'},
  ]
  const userdetailsinfo_2=[
    {title:'level of education',title_details:userCredentials?.education?.level},
    {title:'employment status',title_details:userCredentials?.education?.employmentStatus},
    {title:'sector of employment',title_details:userCredentials?.education?.sector},
    {title:'Duration of employment',title_details:userCredentials?.education?.duration},
    {title:'office email',title_details:userCredentials?.education?.officeEmail},
    {title:'Monthly income',title_details:`₦${userCredentials?.education?.monthlyIncome[0]} - ₦${userCredentials?.education?.monthlyIncome[1]}`},
    {title:'loan repayment',title_details:userCredentials?.education?.loanRepayment},
  ]
  const userdetails_socials=[
    {title:'Twitter',title_details:userCredentials?.socials?.twitter},
    {title:'Facebook',title_details:userCredentials?.socials?.facebook},
    {title:'Instagram',title_details:userCredentials?.socials?.instagram},
  ]
  const user_guarantor_info=[
    {title:'full Name',title_details:`${userCredentials?.guarantor?.firstName} ${userCredentials?.guarantor?.lastName}`},
    {title:'Phone Number',title_details:userCredentials?.guarantor?.phoneNumber},
    {title:'Email Address',title_details:'debby@gmail.com'},
    {title:'Relationship',title_details:'Sister'},
]
const user_guarantor_info_2=[
  {title:'Full Name',title_details:'Debby Ogana'},
  {title:'Phone Number',title_details:'07060780922'},
  {title:'Email Address',title_details:'debby@gmail.com'},
  {title:'Relationship',title_details:'Sister'},

]
   return (
    <div className='user-details-section-wrapper'>
      <div onClick={handleOpenSideBar} className='user-hamburger'>
      { !sidebar ? <MenuIcon/> : <></>}
    
      </div>
    <section className='user-details-section'>
      <div onClick={handleNavigationUser} className='user-details-arrow-back' style={{cursor:'pointer'}}>
        <span><ArrowBack/></span>
        <span>Back to Users</span>
      </div>
      <div className='user-details-header'>
        <h3>User Details</h3>
        <dl>
          <button>BLACKLIST USER</button>
          <button>ACTIVATE USER</button>
        </dl>
      </div>
      <div className='user-top-details-wrapper'>
      <section className='user-details-top'>
          <aside className='user-details-avatar-wrapper'>
            <span className='avatar-img'> 
            <img src={userCredentials?.profile?.avatar} alt="User Avatar" />
            </span>
            <div>
              <h4>{userCredentials?.profile?.firstName} {userCredentials?.profile?.lastName}</h4>
              <span>{userCredentials?.accountNumber}</span>
            </div>
          </aside>
          <aside className='user-tier'>
            <h3>User's Tier</h3>
            <span>
              <StarFilled/>
              <StarUnfilled/>
              <StarUnfilled/>
            </span>
          </aside>
          <aside className='user-numerics'>
            <h4>₦200,000.00</h4>
            <p>9912345678/Providus Bank</p>
          </aside>
      </section>
      <section className='user-tab'>
        <button className='active'>General Details</button>
        {buttonWords.map(btnword=>(

        <button>{btnword}</button>
        ))}
       
      </section>
      </div>
      <section className='user-heavy-info'>
        <aside className='user-personal-info'>
          <h5>Personal Information</h5>
          <div>
            {userdetailsinfo_1.map(details_for_user=>(
              <dl>
              <div className='user-name'>{details_for_user.title}</div>
              <div>{details_for_user.title_details}</div>
            </dl>
            ))}
          </div>
        </aside>
        <hr/>
        <aside className='user-education-job'>
        <h5>Education and Employment</h5>
          <div>
            {userdetailsinfo_2.map(details_of_user_2=>(
              <dl>
              <div className='user-name'>{details_of_user_2.title}</div>
              <div>{details_of_user_2.title_details}</div>
              </dl>
            ))}
          </div>
        </aside>
        <hr/>
        <aside className='user-socials'>
        <h5>Socials</h5>
          <div>

            {
              userdetails_socials.map(socials=>(
                <dl>
                  <div className='user-name'>{socials.title}</div>
                  <div>{socials.title_details}</div>
                </dl>
              ))
            }
          </div>
        </aside>
        <hr/>
        <aside className='user-socials'>
        <h5>Guarantor</h5>
          <div>
            {
              user_guarantor_info.map(guarantor_info=>(
                <dl>
                  <div className='user-name'>{guarantor_info.title}</div>
                  <div>{guarantor_info.title_details}</div>
                </dl>
              ))
            }
          </div>
        </aside>
        <hr/>
        <aside className='user-socials'>
        <h5>&nbsp;</h5>
          <div>
            {user_guarantor_info_2.map(guarantor_2=>(
          <dl>
            <div className='user-name'>{guarantor_2.title}</div>
            <div>{guarantor_2.title_details}</div>
          </dl>
            ))}
          </div>
        </aside>
      </section>
    </section>
    </div>
  )
}

export default Userdetails
