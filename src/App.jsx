import ScoreboardHeader from './components/ScoreboardHeader.jsx'
import GameGrid from './components/GameGrid.jsx'
// import StateWrapper from './components/StateWrapper.jsx' // for loading / error / empty
import './styles/app.css'

export default function App() {
  // TODO(krystal): you write this — call useScoreboard() here, get back
  // whatever shape you decide (games, status, etc.), and pass real values
  // down to ScoreboardHeader / GameGrid. Use StateWrapper in place of
  // GameGrid for the loading / error / empty states.
  const todayDate = '' // TODO(krystal): you write this
  const games = [] // TODO(krystal): you write this

  return (
    <div className="app">
      <ScoreboardHeader title="War Room: WNBA Live" todayDate={todayDate} />
      <GameGrid games={games} />
    </div>
  )
}
