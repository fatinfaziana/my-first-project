import { AVAILABILITY } from '../data/sampleData'
import { useReveal } from '../hooks/useReveal'

function Availability() {
  const bodyRef = useReveal()

  return (
    <section id="availability" className="section" aria-labelledby="availability-heading">
      <p className="eyebrow">Availability</p>
      <h2 id="availability-heading">{AVAILABILITY.heading}</h2>

      <div className="section__body reveal" ref={bodyRef}>
        <p className="tag tag--action availability__chip">{AVAILABILITY.freeTrialChip}</p>
        <ul className="row-list row-list--two">
          {AVAILABILITY.slots.map((slot) => (
            <li key={slot.id} className="row">
              <div className="row__main">
                <span className="row__title">{slot.day}</span>
                <span className="row__meta">
                  {slot.time} · {slot.mode}
                </span>
              </div>
              <span className="row__amount row__status">Open</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Availability