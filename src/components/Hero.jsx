import {
  FREE_TRIAL_LINE,
  HEADLINE,
  PROFILE,
} from '../data/sampleData'
import { useReveal } from '../hooks/useReveal'

function Hero() {
  const textRef = useReveal()
  const cardRef = useReveal()

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__text reveal" ref={textRef}>
        <p className="eyebrow">Tuition</p>
        <h2 id="hero-heading" className="hero__headline">
          {HEADLINE.before} <span className="accent">{HEADLINE.accent}</span>{' '}
          {HEADLINE.after}
        </h2>
        <p className="hero__trial">{FREE_TRIAL_LINE}</p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#booking">
            Send an enquiry
          </a>
          <a className="link-secondary" href="#availability">
            See availability
          </a>
        </div>
        <div className="hero__tags">
          <span className="tag tag--action">Free trial class available</span>
          <span className="sample-note">Sample data</span>
        </div>
      </div>
      <aside className="hero__card reveal" ref={cardRef} aria-label="Tutor snapshot">
        <div className="hero__portrait" aria-hidden="true">
          <svg viewBox="0 0 64 64" width="56" height="56">
            <circle cx="32" cy="22" r="12" fill="none" stroke="currentColor" strokeWidth="3" />
            <path d="M12 56c0-11 9-18 20-18s20 7 20 18" fill="none" stroke="currentColor" strokeWidth="3" />
          </svg>
        </div>
        <h3 className="hero__card-name">{PROFILE.name}</h3>
        <ul className="hero__card-points">
          {PROFILE.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </aside>
    </section>
  )
}

export default Hero