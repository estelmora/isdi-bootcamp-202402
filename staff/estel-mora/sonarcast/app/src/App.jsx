import React, { useState } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { Context, logger } from './utils'
import { errors } from 'com'
import logic from './logic'

import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import Feedback from './components/Feedback'
import Confirm from './components/Confirm'

const { UnauthorizedError } = errors

const App = () => {
    const [feedback, setFeedback] = useState(null)
    const [confirm, setConfirm] = useState(null)

    const navigate = useNavigate()

    const handleNavigation = (path) => {
        logger.debug('App → handleNavigation')

        try {
            navigate(path)
            logger.info(`Navigated to ${path}`)
        } catch (error) {
            logger.error('Navigation error:', error)
            setFeedback({ message: 'Navigation failed. Please try again.', level: 'error' })
        }
    }

    const handleFeedback = (error, level = 'warn') => {
        logger.debug('App → handleFeedback')

        try {
            let feedbackLevel = level

            if (error instanceof UnauthorizedError) {
                logic.logoutUser()
                feedbackLevel = 'error'
                handleNavigation('/login')
            }

            setFeedback({ message: error.message, level: feedbackLevel })
            logger[feedbackLevel](error.message)
        } catch (error) {
            logger.error('Feedback handling error:', error)
            setFeedback({ message: 'An unexpected error occurred. Please try again.', level: 'error' })
        }
    }

    const handleConfirm = (message, callback) => {
        logger.debug('App → handleConfirm')

        setConfirm({ message, callback })
        logger.info('Confirmation requested:', message)
    }

    const handleConfirmCancelClick = () => {
        logger.debug('App → handleConfirmCancelClick')

        try {
            if (confirm) confirm.callback(false)
            setConfirm(null)
            logger.info('Confirmation cancelled.')
        } catch (error) {
            logger.error('Error cancelling confirmation:', error)
            setFeedback({ message: 'An unexpected error occurred. Please try again.', level: 'error' })
        }
    }

    const handleConfirmAcceptClick = () => {
        logger.debug('App → handleConfirmAcceptClick')

        try {
            if (confirm) confirm.callback(true)
            setConfirm(null)
            logger.info('Confirmation accepted.')
        } catch (error) {
            logger.error('Error accepting confirmation:', error)
            setFeedback({ message: 'An unexpected error occurred. Please try again.', level: 'error' })
        }
    }

    logger.debug('App → render')

    return (
        <Context.Provider value={{ showFeedback: handleFeedback, showConfirm: handleConfirm }}>
            {feedback && (
                <Feedback
                    message={feedback.message}
                    level={feedback.level}
                    onAcceptClick={() => setFeedback(null)}
                />
            )}
            {confirm && (
                <Confirm
                    message={confirm.message}
                    onCancelClick={handleConfirmCancelClick}
                    onAcceptClick={handleConfirmAcceptClick}
                />
            )}
            <Routes>
                <Route
                    path="/login"
                    element={
                        logic.isUserLoggedIn() ? (
                            <Navigate to="/" />
                        ) : (
                            <Login
                                onRegisterClick={() => handleNavigation('/register')}
                                onUserLoggedIn={() => handleNavigation('/')}
                            />
                        )
                    }
                />
                <Route
                    path="/register"
                    element={
                        logic.isUserLoggedIn() ? (
                            <Navigate to="/" />
                        ) : (
                            <Register
                                onLoginClick={() => handleNavigation('/login')}
                                onUserRegistered={() => handleNavigation('/login')}
                            />
                        )
                    }
                />
                <Route
                    path="/*"
                    element={
                        logic.isUserLoggedIn() ? (
                            <Home onUserLoggedOut={() => handleNavigation('/login')} />
                        ) : (
                            <Navigate to="/login" />
                        )
                    }
                />
            </Routes>
        </Context.Provider>
    )
}

export default App
