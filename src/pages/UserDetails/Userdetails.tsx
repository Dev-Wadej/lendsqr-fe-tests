import React from 'react'
import {useNavigate,useParams} from 'react-router-dom'

import MenuIcon from '@mui/icons-material/Menu';
import './userdetails.scss'

//=========================Custom Hooks====================================
import {useSidebar } from '../../context/ContextProvider'
import { useGetEachUserQuery} from'../../features/api/apiSlice'
//============================================================================

//=========================SVG's===============   ============  ===========
import {ReactComponent as ArrowBack} from '../../data/svgs/backarrow.svg'
import {ReactComponent as StarFilled} from '../../data/svgs/starfilled.svg'
import {ReactComponent as StarUnfilled} from '../../data/svgs/starunfilled.svg'
//============================================================================

const Userdetails = () => {

  const{sidebar,setSidebar}=useSidebar()
  const navigate= useNavigate()
  const {id} = useParams()

  const {data}=useGetEachUserQuery(id!)
  const handleOpenSideBar=()=>{
    setSidebar?.(true)
  }
  const handleNavigationUser=()=>{
    navigate('/dashboard/user')
  }
  
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
            <img src={data?.profile.avatar} alt="User Avatar" />
            </span>
            <div>
              <h4>{data?.profile.firstName} {data?.profile.lastName}</h4>
              <span>{data?.accountNumber}</span>
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
        <button>Documents</button>
        <button>Bank Details</button>
        <button>Loans</button>
        <button>Savings</button>
        <button>App and System</button>
      </section>
      </div>
      <section className='user-heavy-info'>
        <aside className='user-personal-info'>
          <h5>Personal Information</h5>
          <div>
          <dl>
            <div className='user-name'>full Name</div>
            <div>{data?.profile.firstName} {data?.profile.lastName}</div>
          </dl>
          <dl>
            <div className='user-name'>Phone Number</div>
            <div>{data?.profile.phoneNumber}</div>
          </dl>
          <dl>
            <div className='user-name'>Email Address</div>
            <div>{data?.email}</div>
          </dl>
          <dl>
            <div className='user-name'>Bvn</div>
            <div>{data?.profile.bvn}</div>
          </dl>
          <dl>
            <div className='user-name'>Gender</div>
            <div>{data?.profile.gender}</div>
          </dl>
          <dl>
            <div className='user-name'>Marital status</div>
            <div>Single</div>
          </dl>
          <dl>
            <div className='user-name'>Children</div>
            <div>None</div>
          </dl>
          <dl>
            <div className='user-name'>Type of residence</div>
            <div>Parent’s Apartment</div>
          </dl>
          </div>
        </aside>
        <hr/>
        <aside className='user-education-job'>
        <h5>Education and Employment</h5>
          <div>
          <dl>
            <div className='user-name'>level of education</div>
            <div>{data?.education.level}</div>
          </dl>
          <dl>
            <div className='user-name'>employment status</div>
            <div>{data?.education.employmentStatus}</div>
          </dl>
          <dl>
            <div className='user-name'>sector of employment</div>
            <div>{data?.education.sector}</div>
          </dl>
          <dl>
            <div className='user-name'>Duration of employment</div>
            <div>{data?.education.duration}</div>
          </dl>
          <dl>
            <div className='user-name'>office email</div>
            <div>{data?.education.officeEmail}</div>
          </dl>
          <dl>
            <div className='user-name'>Monthly income </div>
            <div>₦{data?.education.monthlyIncome[0]} - ₦{data?.education.monthlyIncome[1]} </div>
          </dl>
          <dl>
            <div className='user-name'>loan repayment</div>
            <div>{data?.education.loanRepayment}</div>
          </dl>
          </div>
        </aside>
        <hr/>
        <aside className='user-socials'>
        <h5>Socials</h5>
          <div>
          <dl>
            <div className='user-name'>Twitter</div>
            <div>{data?.socials.twitter}</div>
          </dl>
          <dl>
            <div className='user-name'>Facebook</div>
            <div>{data?.socials.facebook}</div>
          </dl>
          <dl>
            <div className='user-name'> Instagram</div>
            <div>{data?.socials.instagram}</div>
          </dl>
          </div>
        </aside>
        <hr/>
        <aside className='user-socials'>
        <h5>Guarantor</h5>
          <div>
          <dl>
            <div className='user-name'>full Name</div>
            <div>{data?.guarantor.firstName} {data?.guarantor.lastName}</div>
          </dl>
          <dl>
            <div className='user-name'>Phone Number</div>
            <div>{data?.guarantor.phoneNumber}</div>
          </dl>
          <dl>
            <div className='user-name'> Email Address</div>
            <div>debby@gmail.com</div>
          </dl>
          <dl>
            <div className='user-name'> Relationship</div>
            <div>Sister</div>
          </dl>
          </div>
        </aside>
        <hr/>
        <aside className='user-socials'>
        <h5>&nbsp;</h5>
          <div>
          <dl>
            <div className='user-name'>full Name</div>
            <div>Debby Ogana</div>
          </dl>
          <dl>
            <div className='user-name'>Phone Number</div>
            <div>07060780922</div>
          </dl>
          <dl>
            <div className='user-name'> Email Address</div>
            <div>debby@gmail.com</div>
          </dl>
          <dl>
            <div className='user-name'> Relationship</div>
            <div>Sister</div>
          </dl>
          </div>
        </aside>

        
      </section>
    </section>
    </div>
  )
}

export default Userdetails
