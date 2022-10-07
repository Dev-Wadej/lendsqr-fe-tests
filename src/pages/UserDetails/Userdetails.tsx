import React from 'react'
import './userdetails.scss'
import {ReactComponent as ArrowBack} from '../../data/svgs/backarrow.svg'
import {ReactComponent as UserAvatar} from '../../data/svgs/useravatar.svg'
import {ReactComponent as StarFilled} from '../../data/svgs/starfilled.svg'
import {ReactComponent as StarUnfilled} from '../../data/svgs/starunfilled.svg'
import MenuIcon from '@mui/icons-material/Menu';
import {useSidebar } from '../../context/ContextProvider'

const Userdetails = () => {
  const{sidebar,setSidebar}=useSidebar()
  const handleOpenSideBar=()=>{
    setSidebar?.(true)
  }
  return (
    <div className='user-details-section-wrapper'>
      <div onClick={handleOpenSideBar} className='user-hamburger'>
      { !sidebar ? <MenuIcon/> : <></>}
    
      </div>
    <section className='user-details-section'>
      <div className='user-details-arrow-back'>
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
            <span><UserAvatar/></span>
            <p>
              <h4>Grace Effiom</h4>
              <span>LSQFf587g90</span>
            </p>
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
            <div>Grace Effiom</div>
          </dl>
          <dl>
            <div className='user-name'>Phone Number</div>
            <div>07060780922</div>
          </dl>
          <dl>
            <div className='user-name'>Email Address</div>
            <div>grace@gmail.com</div>
          </dl>
          <dl>
            <div className='user-name'>Bvn</div>
            <div>07060780922</div>
          </dl>
          <dl>
            <div className='user-name'>Gender</div>
            <div>Female</div>
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
            <div>B.Sc</div>
          </dl>
          <dl>
            <div className='user-name'>employment status</div>
            <div>Employed</div>
          </dl>
          <dl>
            <div className='user-name'>sector of employment</div>
            <div>FinTech</div>
          </dl>
          <dl>
            <div className='user-name'>Duration of employment</div>
            <div>2 years</div>
          </dl>
          <dl>
            <div className='user-name'>office email</div>
            <div>grace@lendsqr.com</div>
          </dl>
          <dl>
            <div className='user-name'>Monthly income </div>
            <div>₦200,000.00- ₦400,000.00</div>
          </dl>
          <dl>
            <div className='user-name'>loan repayment</div>
            <div>40,000</div>
          </dl>
          </div>
        </aside>
        <hr/>
        <aside className='user-socials'>
        <h5>Socials</h5>
          <div>
          <dl>
            <div className='user-name'>Twitter</div>
            <div>@grace_effiom</div>
          </dl>
          <dl>
            <div className='user-name'>Facebook</div>
            <div>Grace Effiom</div>
          </dl>
          <dl>
            <div className='user-name'> Instagram</div>
            <div>@grace_effiom</div>
          </dl>
          </div>
        </aside>
        <hr/>
        <aside className='user-socials'>
        <h5>Guarantor</h5>
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
