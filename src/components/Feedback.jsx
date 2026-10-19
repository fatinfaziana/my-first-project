import { FEEDBACK } from '../data/sampleData'
import { useReveal } from '../hooks/useReveal'

function Feedback() {
  const gridRef = useReveal()

  return (
    <section id="feedback" className="section" aria-labelledby="feedback-heading">
      <p className="eyebrow">Feedback</p>
      <h2 id="feedback-heading">{FEEDBACK.heading}</h2>
      <p className="section__lead">{FEEDBACK.note}</p>

      <div className="cards-grid cards-grid--feedback reveal" ref={gridRef}>
        {FEEDBACK.items.map((item) => (
          <article key={item.id} className="card feedback-card">
            <p className="feedback-card__quote">“{item.quote}”</p>
            <p className="feedback-card__who">
              <span className="feedback-card__name">{item.name}</span>
              <span className="feedback-card__subject">{item.subject}</span>
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Feedback