import { useState } from 'react'
import { AVAILABILITY } from '../data/sampleData'
import { useReveal } from '../hooks/useReveal'

const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

function dayStatus(date, fullDays, partlyDays, calendar) {
  if (fullDays.has(date)) return 'full'
  const slots = calendar.daySlots[date]
  if (slots && slots.some((slot) => slot.status === 'booked')) return 'partial'
  return 'free'
}

function Availability() {
  const bodyRef = useReveal()
  const { calendar, statuses } = AVAILABILITY
  const [selectedDate, setSelectedDate] = useState(null)

  const fullDays = new Set(calendar.fullyBooked)

  const cells = []
  for (let i = 0; i < calendar.firstWeekday; i += 1) {
    cells.push(null)
  }
  for (let date = 1; date <= calendar.dayCount; date += 1) {
    cells.push(date)
  }

  const selectedStatus = selectedDate
    ? dayStatus(selectedDate, fullDays, null, calendar)
    : null
  const selectedSlots = selectedDate ? calendar.daySlots[selectedDate] ?? [] : []

  return (
    <div className="booking-hub__panel">
      <h3 className="booking-hub__panel-title">{AVAILABILITY.heading}</h3>
      <div className="reveal" ref={bodyRef}>
        <p className="tag tag--action availability__chip">{AVAILABILITY.freeTrialChip}</p>
        <p className="section__lead">{AVAILABILITY.note}</p>

        <div className="calendar">
          <div className="calendar__legend-row">
            <span className="legend__item">
              <span className="legend__swatch legend__swatch--free" aria-hidden="true" />
              Free day
            </span>
            <span className="legend__item">
              <span className="legend__swatch legend__swatch--partial" aria-hidden="true" />
              Partly booked
            </span>
            <span className="legend__item">
              <span className="legend__swatch legend__swatch--full" aria-hidden="true" />
              Fully booked
            </span>
          </div>

          <p className="calendar__month">
            {calendar.month} {calendar.year}
          </p>

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
              const status = dayStatus(date, fullDays, null, calendar)
              const isSelected = date === selectedDate
              const freeCount = (calendar.daySlots[date] ?? []).filter(
                (slot) => slot.status === 'free',
              ).length

              return (
                <button
                  key={date}
                  type="button"
                  className={`calendar__day calendar__day--${status}${isSelected ? ' calendar__day--selected' : ''}`}
                  aria-pressed={isSelected}
                  disabled={status === 'full'}
                  aria-label={
                    status === 'full'
                      ? `Day ${date}, ${statuses.full}`
                      : status === 'partial'
                        ? `Day ${date}, ${statuses.partial}, ${freeCount} free`
                        : `Day ${date}, free`
                  }
                  onClick={() => setSelectedDate(isSelected ? null : date)}
                >
                  <span className="calendar__date">{date}</span>
                  {status === 'partial' && (
                    <span className="calendar__tag">{freeCount} free</span>
                  )}
                  {status === 'full' && (
                    <span className="calendar__tag">Full</span>
                  )}
                </button>
              )
            })}
          </div>

          <div className="calendar__detail">
            {selectedDate ? (
              <>
                <p className="calendar__detail-title">
                  Day {selectedDate} ·{' '}
                  {selectedStatus === 'partial'
                    ? `${statuses.partial} — pick a free time`
                    : 'free day'}
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
                  <ul className="row-list">
                    {AVAILABILITY.allTimes.map((time) => (
                      <li key={time} className="row">
                        <div className="row__main">
                          <span className="row__title">{time}</span>
                        </div>
                        <span className="row__status slot-status slot-status--free">
                          {statuses.free}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <p className="calendar__hint">
                Pick a green or yellow day to see its times. Red days are fully
                booked.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Availability