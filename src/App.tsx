import React from 'react';
import {Dashboard,Login,User,UserDetails} from './pages'
import {Route,BrowserRouter as Router, Routes} from 'react-router-dom'


const App = () => {
  return (
    <div>
      <Router>

       <Routes>
         <Route path='/login' element={<Login/>}/>
       </Routes>

          <Routes>
            <Route path='/dashboard' element={<Dashboard/>}>
              <Route path='/user' element={<User/>}/>
              <Route path='/user:id' element={<UserDetails/>}/>    
            </Route>
          </Routes>

      </Router>
    </div>
  )
}

export default App
