import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { deletePodcast } from './methods/deletePodcast';
import { TPodcasts, getPodcasts } from './methods/getPodcasts';
import './App.css'
import { uploadPodcasts } from './methods/uploadPodcasts';


function App() {
    const [podcasts, setPodcasts] = useState<TPodcasts[]>([]);
    const [transcript, setTranscript] = useState('');

    async function handleUploadPodcast(e: React.FormEvent) {
        e.preventDefault();
        const podcast = await uploadPodcasts(transcript)
        setPodcasts([...podcasts, podcast])
        setTranscript("");
    }

    async function handleDeletePodcast(podcastId: string) {
        await deletePodcast(podcastId)
        setPodcasts(podcasts.filter(podcast => podcast._id !== podcastId))
    }


    useEffect(() => {
        async function fetchPodcasts() {
            const response = await fetch("http://localhost:5001/podcasts")
            const newPodcasts = await response.json();
            setPodcasts(newPodcasts);
        }
        fetchPodcasts();
    }, []);



    return (
        <div className="App">
            <ul className='podcasts'>
                {podcasts.map((podcast) => (
                    <li key={podcast._id}>
                        <button onClick={() => handleDeletePodcast(podcast._id)}>Delete</button>
                        {podcast.transcript}
                        <Link to={`podcasts/${podcast._id}`}>{podcast.transcript}Your Name</Link>
                    </li>
                ))}
            </ul>



            <form onSubmit={handleUploadPodcast}>
                <label htmlFor="podcast-transcript">Podcast Transcript</label>
                <input
                    id="podcast-transcript"
                    value={transcript}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setTranscript(e.target.value);
                    }}
                />
                <button>Upload Podcast</button>
            </form>
        </div>
    )
}

export default App
