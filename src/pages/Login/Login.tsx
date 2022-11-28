import { truncate } from 'fs/promises'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

import loginPage from '../../data/images/loginPage.jpg'
import {ReactComponent as CompanyLogo} from '../../data/svgs/companyLogo.svg'
import './login.scss'

const Login = () => {

  const navigate= useNavigate()
  const [password,setPasword]=useState('')
  const [email,setEmail]= useState('')
  const [showPassword,setShowPassword]=useState(false)
  const [statusEmail,setStatusEmail]= useState(true)
  const [statusPassword,setStatusPassword]= useState(true)

  const handleShowPassWord=()=>{
    setShowPassword(prev=>!prev)
  }
  const handleLogin=()=>{
    if(!email){
      setStatusEmail(false)
      return;
    }
    if(!password){
      setStatusPassword(false)
      return;
    }
    if(email && password){
      navigate('./dashboard/user')
    }
  }
  const handleFormSubmit=(e:React.FormEvent)=>{
    e.preventDefault()
  }
  const handleEmailAuth=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setEmail(e.target.value)
    setStatusEmail(true)
  }
    
  const hanldePasswordValue=(e: React.ChangeEvent<HTMLInputElement>)=>{
    setPasword(e.target.value)
    setStatusPassword(true)
  }

  return (
    <section className='login-page'>
      <aside>
        <CompanyLogo/>
      </aside>
      <div className='login-content'>
        <div  className='login-img'>
          <img src={loginPage} alt="Sign in Page Illustrator" />
        </div>
        <form className='login-typography' onSubmit={handleFormSubmit}>
          <h1>Welcome!</h1>
          <h5>Enter details to login</h5>
          <dl>
            <input type="email" placeholder='Email' name='email' onChange={handleEmailAuth} />
            {!statusEmail && <p className='email-validator'>Email is required</p>}

            <div className='show-password'>
            <input name='password' type={showPassword ? 'text' :'password'} placeholder='Password' onChange={hanldePasswordValue} value={password} />
            <a  href="#" onClick={handleShowPassWord}> {showPassword ? 'HIDE' : 'SHOW'} </a>
            </div>
            {!statusPassword && <p className='password-validator'>Enter an password</p>}
            
          </dl>
          <button className='forgot-password'>FORGOT PASSWORD?</button>
          <button type='submit' className='login-btn' onClick={handleLogin}>LOGIN</button>
        </form>
      </div>
      
    </section>
  )
}

export default Login
