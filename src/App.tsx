import { assessmentRoutes } from './pages/assessments/routes'
import { Home } from './pages/public/Home'
import { Login } from './pages/public/Login'
import { Register } from './pages/public/Register'
import { Dashboard } from './pages/student/Dashboard'
import { SkillsWallet } from './pages/wallet'
import { Profile } from './pages/profile'
import { Profile as EditProfile } from './pages/student/Profile'

export default function App() {
  const path = window.location.pathname
  if (path === '/login') return <Login />
  if (path === '/register') return <Register />
  if (path === '/student') return <Dashboard />
  if (path === '/wallet') return <SkillsWallet />
  if (path === '/profile/edit') return <EditProfile />
  if (path === '/profile') return <Profile />
  const AssessmentPage = assessmentRoutes[path]
  if (AssessmentPage) return <AssessmentPage />
  return <Home />
}
