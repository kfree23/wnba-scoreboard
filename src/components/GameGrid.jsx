import GameCard from './GameCard.jsx'
import '../styles/game-grid.css'

// `games` shape per item: { id, awayTeam: {name, abbreviation, logo, score},
//                           homeTeam: {...}, status, clock }
// TODO(krystal): you write this — decide where the `games` array comes from
// (useScoreboard(), fixtures, etc.) and pass it in from the parent.
export default function GameGrid({ games }) {
  return (
    <div className="game-grid">
      {games?.map((game) => (
        <GameCard
          key={game.id}
          awayTeam={game.awayTeam}
          homeTeam={game.homeTeam}
          status={game.status}
          clock={game.clock}
        />
      ))}
    </div>
  )
}
