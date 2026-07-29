import '../styles/search-bar.css'

export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <input
        className="search-bar__input"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search by team name..."
      />
    </div>
  )
}
