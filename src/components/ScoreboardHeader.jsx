import '../styles/scoreboard-header.css'

export default function ScoreboardHeader({ title, todayDate }) {
  return (
    <header className="scoreboard-header">
      <h1 className="scoreboard-header__title">{title}</h1>
      <p className="scoreboard-header__date">{todayDate}</p>
    </header>
  )
}
