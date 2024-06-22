import React, { useState, useEffect } from 'react'
import { useContext, logger } from '../utils'
import logic from '../logic'

import PodcastList from '../components/PodcastList'
import CreatePodcast from '../components/CreatePodcast'
import EditPodcastTitle from '../components/EditPodcastTitle'
import ViewPodcast from '../components/ViewPodcast'

function Home({ onUserLoggedOut }) {
    const { showFeedback } = useContext()

    const [user, setUser] = useState(null)
    const [view, setView] = useState(null)
    const [stamp, setStamp] = useState(null)
    const [podcast, setPodcast] = useState(null)

    useEffect(() => { // cada vegada que es renderitzi el home s'executa aquest codi o cada vegada que canvii algun estat s'executa el codi
        const fetchUser = async () => {
            logger.debug('Home → fetchUser')

            try {
                const user = await logic.retrieveUser()
                setUser(user)
                logger.info('User retrieved successfully.')
            } catch (error) {
                logger.error('Error retrieving user:', error)
                showFeedback(error, 'error')
            }
        }

        fetchUser()
    }, [showFeedback])

    const handleLogoutClick = () => {
        logger.debug('Home → handleLogoutClick')

        try {
            logic.logoutUser()
        } catch (error) {
            logic.cleanUpLoggedInUserId()
        } finally {
            onUserLoggedOut()
        }
    }

    const handleViewChange = (newView, podcast = null) => {
        logger.debug('Home → handleViewChange')
        setView(newView)
        setPodcast(podcast)
        logger.info(`View changed to ${newView}.`)
    }

    const updateStamp = () => {
        logger.debug('Home → updateStamp')
        setStamp(Date.now())
        logger.info('Stamp updated.')
    }

    logger.debug('Home → render')

    return (
        <>
            <header>
                <nav className="flex justify-between items-center p-4 bg-white">
                    <img src="/logo_medium.png" alt="Sonarcast Logo" className="h-20" />
                    {user && <h1 className="text-blue-900 text-2xl">Hello, {user.name}!</h1>}
                    <button
                        onClick={handleLogoutClick}
                        className="px-4 py-2 rounded-full bg-blue-200 text-white"
                    >
                        Logout
                    </button>
                </nav>
                {view === 'view-podcast' && (
                    <button
                        onClick={() => handleViewChange(null)}
                        className="bg-sky-900 text-white px-4 py-2 rounded-lg hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-opacity-50 transition ease-in-out duration-300 ml-6"
                    >
                        Back to Podcasts
                    </button>
                )}
            </header>

            <main>
                {view === null && (
                    <PodcastList
                        stamp={stamp}
                        updateStamp={updateStamp}
                        onViewPodcastClick={podcast => handleViewChange('view-podcast', podcast)}
                        onEditPodcastClick={podcast => handleViewChange('edit-podcast-title', podcast)}
                    />
                )}
                {view === 'view-podcast' && (
                    <ViewPodcast
                        podcast={podcast}
                        onIdeasGenerated={(podcast) => handleViewChange('view-podcast', podcast)}
                    />
                )}
                {view === 'create-podcast' && (
                    <CreatePodcast
                        onCancelClick={() => handleViewChange(null)}
                        onPodcastCreated={() => {
                            handleViewChange(null)
                            updateStamp()
                        }}
                    />
                )}
                {view === 'edit-podcast-title' && (
                    <EditPodcastTitle
                        podcast={podcast}
                        onCancelClick={() => handleViewChange(null)}
                        onPodcastTitleEdited={() => {
                            handleViewChange(null)
                            updateStamp()
                            setPodcast(null)
                        }}
                    />
                )}
            </main>

            <footer className="flex justify-center items-center p-4 bg-white">
                {view === null && (
                    <button
                        onClick={() => handleViewChange('create-podcast')}
                        className="w-48 h-12 bg-sky-900 text-blue-50 font-semibold text-lg rounded-md flex items-center justify-center hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 transition ease-in-out duration-300"
                    >
                        Upload Podcast
                    </button>
                )}
            </footer>
        </>
    )
}

export default Home
