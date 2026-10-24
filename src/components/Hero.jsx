import { FREE_TRIAL_LINE, HEADLINE } from '../data/sampleData'
import { useReveal } from '../hooks/useReveal'

function Hero() {
  const textRef = useReveal()

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
          <a className="btn btn--primary" href="#subjects">
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
    </section>
  )
}

export default Hero