import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import { createPodcast } from '../logic/createPodcast';
import { deletePodcast } from '../logic/deletePodcast';
import { TPodcasts } from '../logic/getPodcasts';

// import PodcastList from '../components/PodcastList';

function Home() {
    const [podcasts, setPodcasts] = useState<TPodcasts[]>([]);
    const [title, setTitle] = useState('');
    const [file, setFile] = useState<File | null>(null);

    async function handleCreatePodcast(e: React.FormEvent) {
        e.preventDefault();
        const podcast = await createPodcast(title)
        setPodcasts([...podcasts, podcast])
        setTitle("");
        setFile(null);
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
        <div className="Home">
            <ul className='podcasts'>
                {podcasts.map((podcast) => (
                    <li key={podcast._id}>
                        <button onClick={() => handleDeletePodcast(podcast._id)}>Delete</button>

                        <Link to={`podcasts/${podcast._id}`}>{podcast.title}</Link>
                    </li>
                ))}
            </ul>

            <form onSubmit={handleCreatePodcast}>
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
                        if (e.target.files && e.target.files.length > 0) {
                            setFile(e.target.files[0]);
                        } else {
                            setFile(null);
                        }
                    }}
                />
                <button>Create Podcast</button>
            </form>
        </div>
    )
}

export default Home
