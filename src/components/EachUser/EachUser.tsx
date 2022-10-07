import React from 'react'
import './EachUser.scss';
import {ReactComponent as StatusToggler} from '../../data/svgs/statustoggler.svg'



interface IEachUser{
  handleClick: React.Dispatch<React.SetStateAction<boolean>>

}
const EachUser:React.FC<IEachUser> = ({handleClick}) => {

  const handleStatusToggler=()=>{
    handleClick?.(prev=>!prev)
  }

  return (

    <ul className='eachuser'>
        <li>Lendsqr</li>
        <li>Adedeji</li>
        <li>adedeji@lendsqr.com</li>
        <li>08078903721</li>
        <li>May 15, 2020 10:00 AM</li>
        <li onClick={handleStatusToggler}>
            <button>Inactive</button>
            <StatusToggler/>
        </li>
    </ul>

  )
}

export default EachUser
