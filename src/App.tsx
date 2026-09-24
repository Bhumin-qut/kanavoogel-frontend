import { Home } from './pages/public/Home'
import { Login } from './pages/public/Login'
import { Dashboard } from './pages/student/Dashboard'

export default function App() {
  const path = window.location.pathname
  if (path === '/login') return <Login />
  if (path === '/student') return <Dashboard />
  return <Home />
}
