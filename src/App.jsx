import ScoreboardHeader from './components/ScoreboardHeader.jsx'
import GameGrid from './components/GameGrid.jsx'
// import StateWrapper from './components/StateWrapper.jsx' // for loading / error / empty
import useScoreboard from './hooks/useScoreboard.js';
import { scoreboardFixture } from './fixtures/games.js';
import './styles/app.css'

export default function App() {
  // TODO(krystal): you write this — call useScoreboard() here, get back
  // whatever shape you decide (games, status, etc.), and pass real values
  // down to ScoreboardHeader / GameGrid. Use StateWrapper in place of
  // GameGrid for the loading / error / empty states.
  const todayDate = new Date().toLocaleDateString('en-US', { 
  weekday: 'long', 
  month: 'long', 
  day: 'numeric' 
})
  const { games, loading, error } = useScoreboard();

  if(loading) {
    return <StateWrapper type="loading" />
  }

  if(error) {
    return <StateWrapper type="error" message={error} />
  }

  if(!games.length) {
    return <StateWrapper type="empty" />
  }

  const mappedGames = games.map((event) => {
    const competition = event.competitions[0];
    const away = competition.competitors.find(c => c.homeAway === 'away');
    const home = competition.competitors.find(c => c.homeAway === 'home');

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

  return (
    <div className="app">
      <ScoreboardHeader title="War Room: WNBA Live" todayDate={todayDate} />
      <GameGrid games={mappedGames} />
    </div>
  )
}
