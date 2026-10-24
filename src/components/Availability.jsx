import { useState } from 'react'
import { AVAILABILITY } from '../data/sampleData'
import { useReveal } from '../hooks/useReveal'

const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

function slotsForDay(month, date) {
  const times = AVAILABILITY.allTimes
  if (month.fullyBooked.includes(date)) {
    return times.map((time) => ({ time, status: 'booked' }))
  }
  if (month.partlyBooked.includes(date)) {
    const freeCount = Math.max(1, Math.min(times.length - 1, (date % 2) + 1))
    return times.map((time, index) => ({
      time,
      status: index < freeCount ? 'free' : 'booked',
    }))
  }
  return times.map((time) => ({ time, status: 'free' }))
}

function MonthGrid({ month, statuses }) {
  const [selectedDate, setSelectedDate] = useState(null)

  const cells = []
  for (let i = 0; i < month.firstWeekday; i += 1) {
    cells.push(null)
  }
  for (let date = 1; date <= month.dayCount; date += 1) {
    cells.push(date)
  }

  const selectedSlots = selectedDate ? slotsForDay(month, selectedDate) : []
  const selectedFull = selectedDate
    ? month.fullyBooked.includes(selectedDate)
    : false

  function statusOf(date) {
    if (month.fullyBooked.includes(date)) return 'full'
    if (month.partlyBooked.includes(date)) return 'partial'
    return 'free'
  }

  return (
    <div className="calendar-month">
      <p className="calendar-month__label">{month.label}</p>

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
          const status = statusOf(date)
          const isSelected = date === selectedDate
          const freeCount = slotsForDay(month, date).filter(
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
              {month.label} · Day {selectedDate}
            </p>
            <ul className="row-list">
              {selectedSlots.map((slot) => (
                <li key={slot.time} className="row">
                  <div className="row__main">
                    <span className="row__title">{slot.time}</span>
                  </div>
                  <span
                    className={`row__status slot-status slot-status--${slot.status}`}
                  >
                    {statuses[slot.status]}
                  </span>
                </li>
              ))}
            </ul>
            {selectedFull && (
              <p className="calendar__hint">
                This day is fully booked. Pick another day.
              </p>
            )}
          </>
        ) : (
          <p className="calendar__hint">
            Pick a green or yellow day to see its times.
          </p>
        )}
      </div>
    </div>
  )
}

function Availability() {
  const bodyRef = useReveal()
  const [monthIndex, setMonthIndex] = useState(0)
  const { months, statuses } = AVAILABILITY
  const month = months[monthIndex]

  return (
    <div className="booking-hub__panel">
      <h3 className="booking-hub__panel-title">{AVAILABILITY.heading}</h3>
      <div className="reveal" ref={bodyRef}>
        <p className="tag tag--action availability__chip">
          {AVAILABILITY.freeTrialChip}
        </p>
        <p className="section__lead">{AVAILABILITY.note}</p>

        <div className="calendar__legend-row">
          <span className="legend__item">
            <span className="legend__swatch legend__swatch--free" aria-hidden="true" />
            Free
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

        <div className="month-tabs" role="tablist" aria-label="Choose a month">
          {months.map((item, index) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={monthIndex === index}
              className={`chip chip--button${monthIndex === index ? ' chip--active' : ''}`}
              onClick={() => setMonthIndex(index)}
            >
              {item.label} {item.year}
            </button>
          ))}
        </div>

        <div className="calendar">
          <p className="calendar__month">
            {month.label} {month.year}
          </p>
          <MonthGrid month={month} statuses={statuses} />
        </div>
      </div>
    </div>
  )
}

export default Availability