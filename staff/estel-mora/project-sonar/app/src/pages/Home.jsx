import { logger } from '../utils'

import logic from '../logic'

import { useState, useEffect } from 'react'

import { Routes, Route } from 'react-router-dom'
import Profile from '../components/Profile'
import CreateSummary from '../components/CreateSummary'

function Home() {
    const [showCreateCharacter, setShowCreateCharacter] = useState(false);

    const handleCreateCharacterClick = () => {
        setShowCreateCharacter(!showCreateCharacter);
    };

    const handleCloseCreateCharacter = () => {
        setShowCreateCharacter(false);
    };

    return <>
        <CreateSummary />
        <Routes>
            <Route path="/profile/:username" element={<Profile />} />
        </Routes>
    </>
}

export default Home