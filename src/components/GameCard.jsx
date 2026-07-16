import StatusBadge from './StatusBadge.jsx'
import '../styles/game-card.css'

// Expected shape for `awayTeam` / `homeTeam`: { name, abbreviation, logo, score }
// `status`: 'live' | 'final' | 'upcoming'
// `clock`: string, only meaningful when status === 'live' (e.g. "Q3 04:52")
export default function GameCard({ awayTeam, homeTeam, status, clock }) {
  return (
    <article className="game-card">
      <header className="game-card__header">
        <StatusBadge status={status} />
        {status === 'live' && <span className="game-card__clock">{clock}</span>}
      </header>

      <div className="game-card__teams">
        <div className="game-card__team-row">
          <div className="game-card__team">
            <img className="game-card__team-logo" src={awayTeam?.logo} alt="" />
            <span className="game-card__team-name">{awayTeam?.name}</span>
          </div>
          <span className="game-card__score">{awayTeam?.score}</span>
        </div>

        <div className="game-card__team-row">
          <div className="game-card__team">
            <img className="game-card__team-logo" src={homeTeam?.logo} alt="" />
            <span className="game-card__team-name">{homeTeam?.name}</span>
          </div>
          <span className="game-card__score">{homeTeam?.score}</span>
        </div>
      </div>
    </article>
  )
}
