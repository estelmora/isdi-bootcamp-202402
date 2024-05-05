import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

import { API_URL } from '../logic/config';

import { createPodcast } from '../logic/createPodcast';
import { deletePodcast } from '../logic/deletePodcast';
import { TPodcasts } from '../logic/getPodcasts';
import Navbar from '../components/Navbar';

function Home() {
    const [podcasts, setPodcasts] = useState<TPodcasts[]>([]);
    const [title, setTitle] = useState<string>('');
    const [file, setFile] = useState<File | null>(null);
    const [transcript, setTranscript] = useState<string>('')
    const [uploadInProgress, setUploadInProgress] = useState<boolean>(false);

    async function handleCreatePodcast() {
        const podcast = await createPodcast(title, transcript)
        setPodcasts([...podcasts, podcast]) // afegir els podcasts actuals + podcast d'ara = .push
        setTitle(""); // reset al title, i es quedi buit
        setFile(null); // reset al "choose file"
    }

    async function handleDeletePodcast(podcastId: string) {
        await deletePodcast(podcastId)
        setPodcasts(podcasts.filter(podcast => podcast._id !== podcastId))
    }

    async function uploadFile() {
        if (file) {
            const formData = new FormData();
            formData.append('podcast', file);
            setUploadInProgress(true);

            try {
                const response = await axios.post(`${API_URL}/files`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }); // request al backend
                console.log("Response received: ", response.data)
                return response.data
            } catch (error) {
                console.error('Error uploading file:', error);
                return ''
            } finally {
                setUploadInProgress(false);
            }
        }
        return ''
    }

    useEffect(() => {
        async function fetchPodcasts() {
            const response = await fetch(`${API_URL}/podcasts`)
            const newPodcasts = await response.json();
            setPodcasts(newPodcasts);
        }
        fetchPodcasts();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const fetchedTranscript = await uploadFile();
        setTranscript(fetchedTranscript);
    };

    useEffect(() => {
        if (transcript !== '' && !uploadInProgress) {
            handleCreatePodcast();
        }
    }, [transcript, uploadInProgress]);  // Dependency on transcript and uploadInProgress

    return (
        <div>
            <Navbar />
            <div className="Home">
                <ul className='podcasts'>
                    {podcasts.map((podcast) => (
                        <li key={podcast._id}>
                            <button onClick={() => handleDeletePodcast(podcast._id)}>Delete</button>

                            <Link to={`podcasts/${podcast._id}`}>{podcast.title}</Link>
                        </li>
                    ))}
                </ul>

                <form onSubmit={handleSubmit}>
                    <h2>Add a podcast</h2>
                    <label htmlFor="podcast-title">Title</label>
                    <input
                        id="podcast-title"
                        value={title}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setTitle(e.target.value);
                        }}
                    />
                    <input
                        type="file"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            if (e.target.files) {
                                setFile(e.target.files[0]);
                            } else {
                                setFile(null);
                            }
                        }}
                    />
                    <button>Create Podcast</button>
                </form>
            </div>
        </div>
    )
}
//afegir footer amb els "copyright sonar cast 2024 mesage"

export default Home
