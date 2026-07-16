// TODO(krystal): you write this
import { useState, useEffect } from 'react';
import { fetchScoreboard } from '../services/api';

const [games, setGames] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

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

    loadGames();
}, []);