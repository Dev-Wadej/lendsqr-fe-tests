import React,{useState,useEffect} from 'react'
import {ReactComponent as StatusToggler} from '../../data/svgs/statustoggler.svg' //Svg
import StatusDropDown from '../../components/StatusDropDown/StatusDropDown' //components
import { IUsersData } from '../../types/types'; //Typescript
import './EachUser.scss';







//=========================HElper Function for generating random Status=====================
const status=[
  {title:'Active',color:'#39CD62',backgroundColor:'#F3FCF6'},
  {title:'Blacklisted',color:'#E4033B',backgroundColor:'#FCE6EB'},
  {title:'Pending',color:'#E9B200',backgroundColor:'#FDF7E5'},
  {title:'Inactive',color:'#545F7D',backgroundColor:'#F5F5F7'}
]
const randomStatusValue=()=>{
  const value= Math.floor(Math.random() * status.length)
  const {backgroundColor,color,title}= status[value]
  return {backgroundColor,color,title}
}
///================================================================================================


interface IEachUser{
  data:IUsersData;
}
const EachUser:React.FC<IEachUser> = ({data}) => {

  const [showStatusDropDown,setShowStatusDropDown]=useState(false)
  const{backgroundColor,color,title} =randomStatusValue()
 
  const handleStatusToggler=(id:string)=>{
      setShowStatusDropDown(prev=>!prev)

    // setShowStatusDropDown(prev=>!prev)
  }

  return (

    <ul className='eachuser'>
        <li>
        
          {data.orgName}
        
          </li>
        <li>
          
          {data.userName}
        
        </li>
        <li>
        
        {data.email}
        </li>
        <li>
        
        {data.phoneNumber}
        </li>
        <li>
        
        {data.createdAt}
        </li>

        <li className='status-toggler-parent' onClick={()=>handleStatusToggler(data.id)}>
            <button style={{color:color,background:backgroundColor}}>{title}</button>
            <StatusToggler/>
              {showStatusDropDown &&
              
            <StatusDropDown id={data.id}/>
              }


        </li>
    </ul>

  )
}

export default EachUser
