import { Home } from './pages/public/Home'
import { Login } from './pages/public/Login'
import { Register } from './pages/public/Register'
import { Dashboard } from './pages/student/Dashboard'
import { Profile } from './pages/student/Profile'

export default function App() {
  const path = window.location.pathname
  if (path === '/login') return <Login />
  if (path === '/register') return <Register />
  if (path === '/student') return <Dashboard />
  if (path === '/profile') return <Profile />
  return <Home />
}
