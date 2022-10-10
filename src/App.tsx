import React,{Suspense} from 'react';
import {Login,User,UserDetails} from './pages'
import {Navbar} from './components';
import {Route,BrowserRouter as Router, Routes} from 'react-router-dom'

import './data/font/AvenirNextLTPro-Bold.otf'
import './data/font/AvenirNextLTPro-It.otf'
import './data/font/AvenirNextLTPro-Regular.otf'
import './App.scss'





const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>

      <Router>
       <Routes>
         <Route path='/' element={<Login/>}/>
       </Routes>
          <Routes>
            <Route path='/dashboard' element={<Navbar/>}>
              <Route path='/dashboard/user' element={<User/>}></Route>
              <Route path='/dashboard/user/:id' element={<UserDetails/>}></Route>      
            </Route>
          </Routes>
      </Router>
      </Suspense>
    </div>
  )
}

export default App
