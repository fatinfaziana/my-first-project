import { useState } from 'react'
import { AVAILABILITY } from '../data/sampleData'
import { useReveal } from '../hooks/useReveal'

const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

function Availability() {
  const bodyRef = useReveal()
  const { calendar, statuses } = AVAILABILITY
  const [selectedDate, setSelectedDate] = useState(null)

  const fullDays = new Set(calendar.fullyBooked)
  const partlyDays = new Set(calendar.partlyBooked)
  const selectedSlots = selectedDate ? calendar.daySlots[selectedDate] ?? [] : []

  const cells = []
  for (let i = 0; i < calendar.firstWeekday; i += 1) {
    cells.push(null)
  }
  for (let date = 1; date <= calendar.dayCount; date += 1) {
    cells.push(date)
  }

  return (
    <section id="availability" className="section" aria-labelledby="availability-heading">
      <p className="eyebrow">Availability</p>
      <h2 id="availability-heading">{AVAILABILITY.heading}</h2>

      <div className="section__body reveal" ref={bodyRef}>
        <p className="tag tag--action availability__chip">{AVAILABILITY.freeTrialChip}</p>
        <p className="section__lead">{AVAILABILITY.note}</p>

        <div className="calendar">
          <div className="calendar__head">
            <p className="calendar__month">
              {calendar.month} {calendar.year}
            </p>
            <p className="calendar__legend">
              <span className="legend__item">
                <span className="legend__dot legend__dot--free" aria-hidden="true" />
                {statuses.free}
              </span>
              <span className="legend__item">
                <span className="legend__dot legend__dot--partial" aria-hidden="true" />
                Partly booked
              </span>
              <span className="legend__item">
                <span className="legend__dot legend__dot--booked" aria-hidden="true" />
                {statuses.full}
              </span>
            </p>
          </div>

          <div className="calendar__weekdays" aria-hidden="true">
            {WEEKDAYS.map((weekday) => (
              <span key={weekday} className="calendar__weekday">
                {weekday}
              </span>
            ))}
          </div>

          <div className="calendar__grid">
            {cells.map((date, index) => {
              if (date === null) {
                return <span key={`empty-${index}`} className="calendar__blank" />
              }
              const isFull = fullDays.has(date)
              const isPartial = partlyDays.has(date)
              const isSelected = date === selectedDate
              return (
                <button
                  key={date}
                  type="button"
                  className={`calendar__day${isFull ? ' calendar__day--full' : ''}${isPartial ? ' calendar__day--partial' : ''}${isSelected ? ' calendar__day--selected' : ''}`}
                  aria-pressed={isSelected}
                  disabled={isFull}
                  aria-label={
                    isFull
                      ? `Day ${date}, ${statuses.full}`
                      : `Day ${date}${isPartial ? ', partly booked' : ', free'}`
                  }
                  onClick={() => setSelectedDate(isSelected ? null : date)}
                >
                  <span className="calendar__date">{date}</span>
                  {isFull && (
                    <span className="calendar__mark calendar__mark--full">
                      {statuses.full}
                    </span>
                  )}
                  {isPartial && !isFull && (
                    <span className="calendar__mark calendar__mark--partial">
                      Partly
                    </span>
                  )}
                </button>
              )
            })}
          </div>

          <div className="calendar__detail">
            {selectedDate ? (
              <>
                <p className="calendar__detail-title">
                  Day {selectedDate}
                </p>
                {selectedSlots.length > 0 ? (
                  <ul className="row-list">
                    {selectedSlots.map((slot) => (
                      <li key={slot.time} className="row">
                        <div className="row__main">
                          <span className="row__title">{slot.time}</span>
                          <span className="row__meta">{slot.mode}</span>
                        </div>
                        <span
                          className={`row__status slot-status slot-status--${slot.status}`}
                        >
                          {statuses[slot.status]}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="calendar__hint">
                    This day is {statuses.open.toLowerCase()} — a free class slot is
                    available. Pick it in the booking form below.
                  </p>
                )}
              </>
            ) : (
              <p className="calendar__hint">
                Pick a free day to see its slots. Fully booked days are shaded and
                cannot be picked.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Availability