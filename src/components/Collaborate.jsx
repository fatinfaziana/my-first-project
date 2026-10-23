import { useState } from 'react'
import { COLLABORATE } from '../data/sampleData'
import { useReveal } from '../hooks/useReveal'

function Collaborate() {
  const bodyRef = useReveal()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [levels, setLevels] = useState([])
  const [subjects, setSubjects] = useState([])
  const [resumeName, setResumeName] = useState('')
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function toggle(list, setList, value) {
    setList((current) =>
      current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value],
    )
  }

  function submit(event) {
    event.preventDefault()
    if (!name.trim()) {
      setError('Add your name.')
      return
    }
    if (!phone.trim() && !email.trim()) {
      setError('Add a phone number or an email.')
      return
    }
    if (levels.length < 1) {
      setError('Pick at least one level to teach.')
      return
    }
    if (subjects.length < 1) {
      setError('Pick at least one subject to teach.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  function reset() {
    setName('')
    setPhone('')
    setEmail('')
    setLevels([])
    setSubjects([])
    setResumeName('')
    setError('')
    setSubmitted(false)
  }

  return (
    <section
      id="collaborate"
      className="section section--tint"
      aria-labelledby="collaborate-heading"
    >
      <p className="eyebrow">{COLLABORATE.eyebrow}</p>
      <h2 id="collaborate-heading">{COLLABORATE.heading}</h2>

      <div className="section__body reveal" ref={bodyRef}>
        <p className="section__lead">{COLLABORATE.intro}</p>

        {submitted ? (
          <div className="booking-success">
            <p className="booking-success__title">{COLLABORATE.successTitle}</p>
            <p className="booking-success__text">{COLLABORATE.successText}</p>
            <div className="booking-success__summary">
              <p>
                <span className="summary__label">Name</span>
                <span className="summary__value">{name}</span>
              </p>
              <p>
                <span className="summary__label">Levels to teach</span>
                <span className="summary__value">{levels.join(', ')}</span>
              </p>
              <p>
                <span className="summary__label">Subjects</span>
                <span className="summary__value">{subjects.join(', ')}</span>
              </p>
              <p>
                <span className="summary__label">Resume</span>
                <span className="summary__value">{resumeName || '—'}</span>
              </p>
            </div>
            <button type="button" className="btn btn--primary" onClick={reset}>
              Start again
            </button>
          </div>
        ) : (
          <form className="collaborate__form" onSubmit={submit}>
            <div className="field">
              <label htmlFor="collab-name">Name</label>
              <input
                id="collab-name"
                type="text"
                value={name}
                onChange={(event) => {
                  setName(event.target.value)
                  setError('')
                }}
              />
            </div>
            <div className="field">
              <label htmlFor="collab-phone">Phone number</label>
              <input
                id="collab-phone"
                type="tel"
                value={phone}
                onChange={(event) => {
                  setPhone(event.target.value)
                  setError('')
                }}
              />
            </div>
            <div className="field">
              <label htmlFor="collab-email">Email</label>
              <input
                id="collab-email"
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                  setError('')
                }}
              />
            </div>

            <fieldset className="booking__fieldset">
              <legend className="booking__legend">Level to teach</legend>
              <div className="chip-row">
                {COLLABORATE.levels.map((level) => (
                  <button
                    key={level.id}
                    type="button"
                    className={`chip chip--button${levels.includes(level.label) ? ' chip--active' : ''}`}
                    aria-pressed={levels.includes(level.label)}
                    onClick={() => {
                      toggle(levels, setLevels, level.label)
                      setError('')
                    }}
                  >
                    {level.label}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset className="booking__fieldset">
              <legend className="booking__legend">Subjects to teach</legend>
              <div className="chip-row">
                {COLLABORATE.subjects.map((subject) => (
                  <button
                    key={subject}
                    type="button"
                    className={`chip chip--button${subjects.includes(subject) ? ' chip--active' : ''}`}
                    aria-pressed={subjects.includes(subject)}
                    onClick={() => {
                      toggle(subjects, setSubjects, subject)
                      setError('')
                    }}
                  >
                    {subject}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="field">
              <label htmlFor="collab-resume">Upload resume document</label>
              <input
                id="collab-resume"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(event) => {
                  setResumeName(event.target.files?.[0]?.name ?? '')
                  setError('')
                }}
              />
              {resumeName && (
                <p className="field__hint">Selected: {resumeName}</p>
              )}
              <p className="field__hint">
                Nothing is uploaded tonight. With the backend added, the file and
                details go straight to the Excel sheet.
              </p>
            </div>

            <p className="booking__error" role="alert">
              {error}
            </p>
            <button type="submit" className="btn btn--primary">
              Send collaboration request
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default Collaborate