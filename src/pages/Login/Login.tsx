import React from 'react'
import loginPage from '../../data/images/loginPage.jpg'
import {ReactComponent as CompanyLogo} from '../../data/svgs/companyLogo.svg'
import './login.scss'

const Login = () => {
  return (
    <section className='login-page'>
      <nav>
        <CompanyLogo/>
      </nav>
      <div className='login-content'>
        <div  className='login-img'>
          <img src={loginPage} alt="Sign in Page Illustrator" />
        </div>
        <div className='login-typography'>
          <h1>Welcome!</h1>
          <h5>Enter details to login</h5>
          <dl>
            <input type="text" placeholder='Email' />
            <input type="text" placeholder='Password' />
          </dl>
          <button className='forgot-password'>FORGOT PASSWORD?</button>
          <button className='login-btn'>LOGIN</button>
        </div>
      </div>
      
    </section>
  )
}

export default Login
