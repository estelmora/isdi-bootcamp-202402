import { logger } from './utils'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Context } from './context'
import logic from './logic'

// app-react > src > pages
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
// import Home from './pages/Home'

import Feedback from './components/Feedback'
import Confirm from './components/Confirm'
import { errors } from 'com'

const { UnauthorizedError } = errors

function App() {
  const [feedback, setFeedback] = useState(null)
  const [confirm, setConfirm] = useState(null)

  const handleLoginClick = () => navigate('/login')

  const handleRegisterClick = () => navigate('/register')

  const handleUserLoggedIn = () => navigate('/')

  const handleUserLoggedOut = () => navigate('/login')

  const handleFeedbackAcceptClick = () => setFeedback(null)

  const handleFeedback = (error, level = 'warn') => {
    if (error instanceof UnauthorizedError) {
      logic.logoutUser()

      level = 'error'

      handleUserLoggedOut()
    }

    setFeedback({ message: error.message, level })
  }

  const handleConfirm = (message, callback) => setConfirm({ message, callback })

  const handleConfirmCancelClick = () => {
    confirm.callback(false)

    setConfirm(null)
  }

  const handleConfirmAcceptClick = () => {
    confirm.callback(true)

    setConfirm(null)
  }

  logger.debug('App -> render')

  // Aquí se corrige el error, agregando BrowserRouter que te proporcionará el contexto de enrutamiento
  return (
    <Router>
      <Context.Provider value={{ showFeedback: handleFeedback, showConfirm: handleConfirm }}>
        <Routes>
          <Route path="/" element={<Landing onLoginClick={handleLoginClick} onRegisterClick={handleRegisterClick} />} />
          {/* Asegúrate de que estas rutas estén descomentadas y correctamente configuradas */}
          {/* <Route path="/home" element={logic.isUserLoggedIn() ? <Home onUserLoggedOut={handleUserLoggedOut} /> : <Navigate to="/login" />} />
          <Route path="/login" element={logic.isUserLoggedIn() ? <Navigate to="/home" /> : <Login onUserLoggedIn={handleUserLoggedIn} />} />
          <Route path="/register" element={logic.isUserLoggedIn() ? <Navigate to="/home" /> : <Register onUserRegistered={handleLoginClick} />} />*/}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        {feedback && <Feedback message={feedback.message} level={feedback.level} onAcceptClick={handleFeedbackAcceptClick} />}
        {confirm && <Confirm message={confirm.message} onCancelClick={handleConfirmCancelClick} onAcceptClick={handleConfirmAcceptClick} />}
      </Context.Provider>
    </Router>
  );
}

export default App;
