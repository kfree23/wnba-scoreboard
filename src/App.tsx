import { useState } from 'react';
import ScoreboardHeader from './components/ScoreboardHeader.js'
import SearchBar from './components/SearchBar.js'
import GameGrid from './components/GameGrid.js'
import StateWrapper from './components/StateWrapper.js' 
import useScoreboard from './hooks/useScoreboard.js';
import './styles/app.css'

export default function App() {
  const todayDate = new Date().toLocaleDateString('en-US', { 
  weekday: 'long', 
  month: 'long', 
  day: 'numeric' 
})
  const { games, loading, error } = useScoreboard();
  const [ query, setQuery ] = useState("");
  

  if(loading) {
    return <StateWrapper variant="loading" />
  }

  if(error) {
    return <StateWrapper variant="error" message={error} />
  }

  if(!games.length) {
    return <StateWrapper variant="empty" />
  }

  const mappedGames = games.map((event) => {
    const competition = event.competitions[0];
    const away = competition.competitors.find((c: any)=> c.homeAway === 'away');
    const home = competition.competitors.find((c: any)=> c.homeAway === 'home');

    return {
      id: competition.id,
      awayTeam: {
        name: away.team.displayName,
        abbreviation: away.team.abbreviation,
        score: away.score,
        logo: away.team.logo
      },
      homeTeam: {
        name: home.team.displayName,
        abbreviation: home.team.abbreviation,
        score: home.score,
        logo: home.team.logo
      },
      status: event.status.type.state,
      clock: event.status.displayClock
    }
  })

  const filterGames = mappedGames.filter((game) => {
    return game.awayTeam.name.toLowerCase().includes(query.toLowerCase()) || game.homeTeam.name.toLowerCase().includes(query.toLowerCase())
  });

  return (
    <div className="app">
      <ScoreboardHeader title="War Room: WNBA Live" todayDate={todayDate} />
      <SearchBar
        value={query} 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)} 
      />
      <GameGrid games={filterGames} />
    </div>
  )
}
