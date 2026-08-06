import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import AuthPage from './pages/auth'
import RouteGuard from './components/route-guard'
import { useContext } from 'react'
import InstructorDashboardpage from './pages/instructor'
import StudentViewCommonLayout from './components/student-view/common-layout'
import StudentHomePage from './pages/student/home'
import { AuthContext } from './context/auth-context'
import NotFoundPage from './pages/not-found'

function App() {

  const {auth} = useContext(AuthContext)

  return (
    <Routes>
      {/* <Route path="/" element={<Navigate to="/auth" replace />}/> */}
      <Route path='/auth' element={<RouteGuard element={<AuthPage/>} authenticated={auth.authenticate} user={auth?.user}/>}/>
      <Route path='/instructor' element={<RouteGuard element={<InstructorDashboardpage/>} authenticated={auth.authenticate} user={auth?.user}/>}/>

      <Route path='/' element={<RouteGuard element={<StudentViewCommonLayout/>} authenticated={auth.authenticate} user={auth?.user}/>}>
        <Route path='/home' element={<StudentHomePage/>} />
        <Route path='' element={<StudentHomePage/>} />

      </Route>
      <Route path='*' element={<NotFoundPage/>}/>
      
    </Routes>
  )
}

export default App
