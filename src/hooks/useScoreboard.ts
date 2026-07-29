import { useState, useEffect } from 'react';
import { fetchScoreboard } from '../services/api';

function useScoreboard() {

    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<null | string>(null);

    useEffect(() => {
        async function loadGames() {
            try {
                const events = await fetchScoreboard();
                setGames(events)
            } catch (err) {
                console.error(err)
                setError("Failed to load games...")
            } finally {
                setLoading(false)
            }
        }

        async function refreshGames() {
            try {
                const events = await fetchScoreboard();
                setGames(events)
            } catch (err) {
                console.error(err)
                setError("Failed to load games...")
            }
        }

        const interval = setInterval(() => {
            refreshGames();
        }, 30000);

        loadGames();

        return () => clearInterval(interval);
    }, []);

    return { games, loading, error };
}

export default useScoreboard;