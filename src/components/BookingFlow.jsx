import { useState } from 'react'
import {
  AVAILABILITY,
  COMBO_EXTRA_PRICE,
  LEVELS,
  OBJECTIVE_PRICE,
  priceForSubjects,
} from '../data/sampleData'
import { useReveal } from '../hooks/useReveal'

const STEP_LABELS = ['Level', 'Subjects', 'Combo price', 'Availability']

function BookingFlow() {
  const bodyRef = useReveal()

  const [step, setStep] = useState(0)
  const [levelId, setLevelId] = useState('')
  const [subjectIds, setSubjectIds] = useState([])
  const [slotId, setSlotId] = useState('')
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const level = LEVELS.find((item) => item.id === levelId)
  const chosenSubjects = level
    ? level.subjects.filter((subject) => subjectIds.includes(subject.id))
    : []
  const price = priceForSubjects(levelId, subjectIds)
  const slot = AVAILABILITY.slots.find((item) => item.id === slotId)

  function toggleSubject(id) {
    setSubjectIds((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    )
  }

  function goNext() {
    if (step === 0) {
      if (!levelId) {
        setError('Choose a level to continue.')
        return
      }
      setError('')
      setStep(1)
      return
    }
    if (step === 1) {
      if (subjectIds.length < 1) {
        setError('Pick at least one subject.')
        return
      }
      setError('')
      setStep(2)
      return
    }
    if (step === 2) {
      setError('')
      setStep(3)
    }
  }

  function goBack() {
    setError('')
    setStep((current) => Math.max(0, current - 1))
  }

  function submit(event) {
    event.preventDefault()
    if (!slotId) {
      setError('Choose an availability slot.')
      return
    }
    if (!name.trim()) {
      setError('Add your name.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  function reset() {
    setStep(0)
    setLevelId('')
    setSubjectIds([])
    setSlotId('')
    setName('')
    setContact('')
    setError('')
    setSubmitted(false)
  }

  if (submitted) {
    return (
      <section id="booking" className="section" aria-labelledby="booking-heading">
        <p className="eyebrow">Book</p>
        <h2 id="booking-heading">Send an enquiry</h2>
        <div className="booking-success reveal" ref={bodyRef}>
          <p className="booking-success__title">
            Thank you — your enquiry has been recorded.
          </p>
          <p className="booking-success__text">
            This is a sample page, nothing was sent or saved.
          </p>
          <div className="booking-success__summary">
            <p>
              <span className="summary__label">Level</span>
              <span className="summary__value">{level?.name}</span>
            </p>
            <p>
              <span className="summary__label">Subjects</span>
              <span className="summary__value">
                {chosenSubjects.map((subject) => subject.name).join(', ')}
              </span>
            </p>
            <p>
              <span className="summary__label">Combo price</span>
              <span className="summary__value nums">RM {price}</span>
            </p>
            <p>
              <span className="summary__label">Preferred slot</span>
              <span className="summary__value">
                {slot ? `${slot.day} ${slot.time} · ${slot.mode}` : '—'}
              </span>
            </p>
          </div>
          <button type="button" className="btn btn--primary" onClick={reset}>
            Start again
          </button>
        </div>
      </section>
    )
  }

  return (
    <section id="booking" className="section" aria-labelledby="booking-heading">
      <p className="eyebrow">Book</p>
      <h2 id="booking-heading">Send an enquiry</h2>
      <p className="section__lead">
        Four short steps. Nothing is sent or saved on this sample page.
      </p>

      <div className="booking reveal" ref={bodyRef}>
        <p className="booking__step">
          Step {step + 1} of 4 · {STEP_LABELS[step]}
        </p>

        {step === 0 && (
          <fieldset className="booking__fieldset">
            <legend className="booking__legend">Which level are you studying?</legend>
            <div className="option-grid">
              {LEVELS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`option${levelId === item.id ? ' option--selected' : ''}`}
                  aria-pressed={levelId === item.id}
                  onClick={() => {
                    setLevelId(item.id)
                    setSubjectIds([])
                    setError('')
                  }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </fieldset>
        )}

        {step === 1 && (
          <fieldset className="booking__fieldset">
            <legend className="booking__legend">
              Which subjects? Pick one or more.
            </legend>
            <div className="option-grid">
              {level?.subjects.map((subject) => (
                <button
                  key={subject.id}
                  type="button"
                  className={`option${subjectIds.includes(subject.id) ? ' option--selected' : ''}`}
                  aria-pressed={subjectIds.includes(subject.id)}
                  onClick={() => {
                    toggleSubject(subject.id)
                    setError('')
                  }}
                >
                  {subject.name}
                </button>
              ))}
            </div>
          </fieldset>
        )}

        {step === 2 && (
          <div className="booking__fieldset">
            <p className="booking__legend">Your combo price</p>
            <div className="price-panel">
              <p className="price-panel__total nums">
                RM {price}
                <span className="price-panel__note"> per month</span>
              </p>
              <ul className="price-panel__lines">
                <li>
                  <span>
                    {chosenSubjects[0]?.name ?? 'First subject'} (first subject)
                  </span>
                  <span className="nums">RM {OBJECTIVE_PRICE}</span>
                </li>
                {chosenSubjects.slice(1).map((subject) => (
                  <li key={subject.id}>
                    <span>{subject.name} (combo rate)</span>
                    <span className="nums">RM {COMBO_EXTRA_PRICE}</span>
                  </li>
                ))}
              </ul>
              <p className="price-panel__includes">
                Includes: weekly classes for each subject, past-paper practice and
                weekly feedback on each student's progress.
              </p>
            </div>
          </div>
        )}

        {step === 3 && (
          <form className="booking__fieldset" onSubmit={submit}>
            <p className="tag tag--action booking__trial">
              {AVAILABILITY.freeTrialChip}
            </p>
            <fieldset className="booking__fieldset booking__fieldset--inner">
              <legend className="booking__legend">Pick a preferred slot</legend>
              <div className="option-grid option-grid--slots">
                {AVAILABILITY.slots.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`option${slotId === item.id ? ' option--selected' : ''}`}
                    aria-pressed={slotId === item.id}
                    onClick={() => {
                      setSlotId(item.id)
                      setError('')
                    }}
                  >
                    <span className="option__title">{item.day}</span>
                    <span className="option__meta">
                      {item.time} · {item.mode}
                    </span>
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="field">
              <label htmlFor="booking-name">Your name</label>
              <input
                id="booking-name"
                type="text"
                value={name}
                onChange={(event) => {
                  setName(event.target.value)
                  setError('')
                }}
              />
            </div>
            <div className="field">
              <label htmlFor="booking-contact">Contact (phone or email, sample)</label>
              <input
                id="booking-contact"
                type="text"
                value={contact}
                onChange={(event) => setContact(event.target.value)}
              />
            </div>
          </form>
        )}

        <p className="booking__error" role="alert">
          {error}
        </p>

        <div className="booking__actions">
          {step > 0 && (
            <button type="button" className="btn btn--ghost" onClick={goBack}>
              Back
            </button>
          )}
          {step < 3 ? (
            <button type="button" className="btn btn--primary" onClick={goNext}>
              Continue
            </button>
          ) : (
            <button
              type="button"
              className="btn btn--primary"
              onClick={submit}
            >
              Send enquiry
            </button>
          )}
        </div>

        {price > 0 && step < 2 && (
          <p className="booking__preview nums">Running price: RM {price}</p>
        )}
      </div>
    </section>
  )
}

export default BookingFlow