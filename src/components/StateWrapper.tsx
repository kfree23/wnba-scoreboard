import '../styles/state-wrapper.css'


export default function StateWrapper({ variant, title, message }) {
  return (
    <div className={`state-wrapper state-wrapper--${variant}`}>
      {variant === 'loading' && <span className="state-wrapper__spinner" />}
      {title && <p className="state-wrapper__title">{title}</p>}
      {message && <p className="state-wrapper__message">{message}</p>}
    </div>
  )
}
