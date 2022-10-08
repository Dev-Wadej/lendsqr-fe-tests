import React from 'react'
import {ReactComponent as Blacklist} from '../../data/svgs/blacklistuser.svg'
import {ReactComponent as ActivateUser} from '../../data/svgs/activateuser.svg'
import {ReactComponent as Eyes} from '../../data/svgs/eyes.svg'
import { Link } from 'react-router-dom'
import './statusdropdown.scss'

const StatusDropDown = ({id}:{id:string}) => {
  return (
    <section className='status-dropdown'>
      <div>
      <Link to={id} >
          <span><Eyes/></span>
          <span>View Details</span>
        </Link>
      </div>
      <div>
          <span><Blacklist/></span>
          <span>Blacklist User</span>
      </div>
      <div>
          <span><ActivateUser/></span>
          <span>Activate User</span>
      </div>
    </section>
  )
}

export default StatusDropDown
