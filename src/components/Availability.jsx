import { useState } from 'react'
import { AVAILABILITY } from '../data/sampleData'
import { useReveal } from '../hooks/useReveal'

function Availability() {
  const bodyRef = useReveal()
  const { calendar } = AVAILABILITY
  const [selectedDate, setSelectedDate] = useState(null)

  const selectedDay = calendar.days.find((day) => day.date === selectedDate)

  return (
    <section id="availability" className="section" aria-labelledby="availability-heading">
      <p className="eyebrow">Availability</p>
      <h2 id="availability-heading">{AVAILABILITY.heading}</h2>

      <div className="section__body reveal" ref={bodyRef}>
        <p className="tag tag--action availability__chip">{AVAILABILITY.freeTrialChip}</p>
        <p className="section__lead">{AVAILABILITY.note}</p>

        <div className="calendar">
          <div className="calendar__head">
            <p className="calendar__month">{calendar.month}</p>
            <p className="calendar__legend">
              <span className="legend__item">
                <span className="legend__dot legend__dot--free" aria-hidden="true" />
                {AVAILABILITY.statuses.free}
              </span>
              <span className="legend__item">
                <span className="legend__dot legend__dot--booked" aria-hidden="true" />
                {AVAILABILITY.statuses.booked}
              </span>
            </p>
          </div>

          <div className="calendar__weekdays" aria-hidden="true">
            {calendar.weekdays.map((weekday) => (
              <span key={weekday} className="calendar__weekday">
                {weekday}
              </span>
            ))}
          </div>

          <div className="calendar__grid">
            {calendar.days.map((day) => {
              const hasFree = day.slots.some((slot) => slot.status === 'free')
              const hasBooked = day.slots.some((slot) => slot.status === 'booked')
              const hasSlots = day.slots.length > 0
              const isSelected = day.date === selectedDate
              return (
                <button
                  key={day.date}
                  type="button"
                  className={`calendar__day${isSelected ? ' calendar__day--selected' : ''}${hasFree ? ' calendar__day--free' : ''}`}
                  aria-pressed={isSelected}
                  disabled={!hasSlots}
                  onClick={() => setSelectedDate(day.date)}
                >
                  <span className="calendar__date">{day.date}</span>
                  <span className="calendar__dots">
                    {hasFree && (
                      <span className="legend__dot legend__dot--free" aria-hidden="true" />
                    )}
                    {hasBooked && (
                      <span className="legend__dot legend__dot--booked" aria-hidden="true" />
                    )}
                  </span>
                </button>
              )
            })}
          </div>

          <div className="calendar__detail">
            {selectedDay ? (
              <>
                <p className="calendar__detail-title">
                  {selectedDay.weekday} {selectedDay.date}
                </p>
                <ul className="row-list">
                  {selectedDay.slots.map((slot) => (
                    <li key={slot.time} className="row">
                      <div className="row__main">
                        <span className="row__title">{slot.time}</span>
                        <span className="row__meta">{slot.mode}</span>
                      </div>
                      <span
                        className={`row__status slot-status slot-status--${slot.status}`}
                      >
                        {AVAILABILITY.statuses[slot.status]}
                      </span>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p className="calendar__hint">
                Pick a date to see its free and booked slots.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Availability