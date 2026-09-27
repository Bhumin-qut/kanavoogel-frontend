import { Home } from './pages/public/Home'
import { Login } from './pages/public/Login'
import { Dashboard } from './pages/student/Dashboard'
import { SkillsWallet } from './pages/wallet'
import { Profile } from './pages/profile'

export default function App() {
  const path = window.location.pathname
  if (path === '/login') return <Login />
  if (path === '/student') return <Dashboard />
  if (path === '/wallet') return <SkillsWallet />
  if (path === '/profile') return <Profile />
  return <Home />
}
