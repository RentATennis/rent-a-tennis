import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import LandingPage from '../pages/LandingPage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'

const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />}/>
      <Route path='/login' element={<LoginPage />}/>
      <Route path='/register' element={<RegisterPage />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
    </Routes>
  )
}

export default ApplicationRoutes