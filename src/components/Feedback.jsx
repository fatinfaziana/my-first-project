import { FEEDBACK } from '../data/sampleData'
import { useReveal } from '../hooks/useReveal'

function Avatar({ tone }) {
  return (
    <span className={`avatar avatar--${tone}`} aria-hidden="true">
      <svg viewBox="0 0 40 40" width="34" height="34">
        <circle cx="20" cy="15" r="7" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M8 36c0-6.6 5.4-11 12-11s12 4.4 12 11" fill="none" stroke="currentColor" strokeWidth="2.5" />
      </svg>
    </span>
  )
}

function Feedback() {
  const gridRef = useReveal()

  return (
    <section id="feedback" className="section" aria-labelledby="feedback-heading">
      <p className="eyebrow">Feedback</p>
      <h2 id="feedback-heading">{FEEDBACK.heading}</h2>
      <p className="section__lead">{FEEDBACK.note}</p>
      <p className="tag tag--action feedback__reward">{FEEDBACK.reward}</p>

      <div className="cards-grid cards-grid--feedback reveal" ref={gridRef}>
        {FEEDBACK.items.map((item) => (
          <article key={item.id} className="card feedback-card">
            <div className="feedback-card__photos">
              <Avatar tone={item.tone} />
              <Avatar tone={item.tone} />
            </div>
            <p className="feedback-card__quote">“{item.quote}”</p>
            <p className="feedback-card__who">
              <span className="feedback-card__name">{item.parentName} (parent)</span>
              <span className="feedback-card__subject">
                {item.childName} · {item.subject}
              </span>
            </p>
          </article>
        ))}
      </div>

      <p className="feedback__note">
        Parents and students can send their own feedback with a photo. Photos are
        a field to fill in; with the backend added they will be stored.
      </p>
    </section>
  )
}

export default Feedback