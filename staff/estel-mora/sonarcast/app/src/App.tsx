import { useEffect, useState } from 'react'
import './App.css'
type TPodcasts = {
    title: string;
    _id: string;
}


function App() {
    const [podcasts, setPodcasts] = useState<TPodcasts[]>([]);
    const [transcript, setTranscript] = useState('');

    async function handleUploadPodcast(e: React.FormEvent) {
        e.preventDefault();
        await fetch('http://localhost:5001/podcasts', {
            method: 'POST',
            body: JSON.stringify({
                transcript,
            }),
            headers: {
                "Content-Type": 'application/json',
            }
        })
        setTranscript("");
    }

    useEffect(() => {
        async function fetchPodcasts() {
            const response = await fetch("http://localhost:5001/podcasts")
            const newPodcasts = await response.json();
            setPodcasts(newPodcasts);
            console.log(newPodcasts)
        }
        fetchPodcasts();


    }, []);



    return (
        <div className="App">
            <ul className='podcasts'>
                {podcasts.map((podcast) => (
                    <li key={podcast._id}>{podcast.transcript}</li>

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

export default App;
