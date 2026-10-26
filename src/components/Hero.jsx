import { FREE_TRIAL_LINE, PROFILE } from '../data/sampleData'
import { useReveal } from '../hooks/useReveal'

function Hero() {
  const textRef = useReveal()

  return (
    <section className="hero hero--dashboard" aria-labelledby="hero-heading">
      <div className="hero__text reveal" ref={textRef}>
        <p className="eyebrow">Welcome to your learning space</p>
        <h1 id="hero-heading" className="hero__headline">
          Invest in your <span className="accent">education</span>
        </h1>
        <p className="hero__trial">{FREE_TRIAL_LINE}</p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#booking">Book a class</a>
          <a className="link-secondary" href="#booking">See availability</a>
        </div>
        <div className="hero__tags">
          <span className="tag tag--action">Free trial class available</span>
          <span className="sample-note">{PROFILE.points[0]}</span>
        </div>
      </div>
      <aside className="hero__dashboard-card" aria-label="Learning snapshot">
        <div className="hero__mini-avatar"><img src={PROFILE.photo} alt="" /></div>
        <h2>{PROFILE.name}</h2>
        <p>10 years of tutoring experience</p>
        <div className="hero__metric"><strong>From kindergarten to A-Level</strong><span>National &amp; International</span></div>
      </aside>
    </section>
  )
}

export default Hero
