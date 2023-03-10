import { Route, Routes } from "react-router-dom"
import { ShopProvider } from "../contexts/ShopContext/ShopContext"
import Dashboard from "../pages/Dashboard"
import LandingPage from "../pages/LandingPage"
import LoginPage from "../pages/LoginPage"
import ProfilePage from "../pages/ProfilePage"
import RegisterPage from "../pages/RegisterPage"
import ProtectedRoutes from "./ProtectedRoutes"

const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<ShopProvider><Dashboard /></ShopProvider>}/>

      <Route path="/profile" element={<ProtectedRoutes />}>
        <Route index element={<ShopProvider><ProfilePage /></ShopProvider>}/>
      </Route>

    </Routes>
  )
}

export default ApplicationRoutes
