import CourseDetail from './pages/CourseDetail.jsx'
import Register from './pages/Register.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Login from './pages/Login.jsx'
import CourseLearning from './pages/CourseLearning.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'
window.addEventListener('pageshow', () => {
    if (
        !localStorage.getItem('user') &&
        window.location.pathname === '/'
    ) {
        window.location.replace('/login')
    }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <Routes>
      <Route
  path="/"
  element={
    <ProtectedRoute>
      <App />
    </ProtectedRoute>
  }
/>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
  path="/course/:id"
  element={
    <ProtectedRoute>
      <CourseDetail />
    </ProtectedRoute>
  }
/>
<Route
  path="/course/:id/learn"
  element={
    <ProtectedRoute>
      <CourseLearning />
    </ProtectedRoute>
  }
/>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
