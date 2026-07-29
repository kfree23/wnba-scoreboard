import '../styles/status-badge.css'

const LABELS = {
  live: 'Live',
  final: 'Final',
  upcoming: 'Upcoming',
}


export default function StatusBadge({ status }) {
  return (
    <span className={`status-badge status-badge--${status}`}>
      {status === 'live' && <span className="status-badge__dot" />}
      {LABELS[status] ?? status}
    </span>
  )
}
