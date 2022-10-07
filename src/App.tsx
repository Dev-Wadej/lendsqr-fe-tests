import React from 'react';
import {Dashboard,Login,User,UserDetails} from './pages'
import {Navbar} from './components';
import {Route,BrowserRouter as Router, Routes} from 'react-router-dom'
import './data/font/AvenirNextLTPro-Bold.otf'
import './data/font/AvenirNextLTPro-It.otf'
import './data/font/AvenirNextLTPro-Regular.otf'
import './App.scss'





const App = () => {
  return (
    <div>
      <Router>
       <Routes>
         <Route path='/' element={<Login/>}/>
       </Routes>
          <Routes>
            <Route path='/dashboard' element={<Navbar/>}>
              <Route index element={<Dashboard/>}></Route>
              <Route path='/dashboard/user' element={<User/>}></Route>
              {/* <Route path='/dashboard/user:id' element={<UserDetails/>}></Route>     */}
              <Route path='goat' element={<UserDetails/>}></Route>    
            </Route>
          </Routes>
      </Router>
    </div>
  )
}

export default App
