import GameCard from './GameCard.jsx'
import '../styles/game-grid.css'
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
