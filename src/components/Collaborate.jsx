import { useState } from 'react'
import { COLLABORATE } from '../data/sampleData'
import { useReveal } from '../hooks/useReveal'

function Collaborate() {
  const bodyRef = useReveal()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subjects, setSubjects] = useState('')
  const [resume, setResume] = useState('')
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function submit(event) {
    event.preventDefault()
    if (!name.trim()) {
      setError('Add your name.')
      return
    }
    if (!email.trim()) {
      setError('Add your email or contact.')
      return
    }
    if (!subjects.trim()) {
      setError('List the subjects you can teach.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  function reset() {
    setName('')
    setEmail('')
    setSubjects('')
    setResume('')
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

        <div className="collaborate">
          <div className="collaborate__subjects">
            <h3 className="subheading">{COLLABORATE.subjectsNote}</h3>
            <ul className="chip-list">
              {COLLABORATE.subjects.map((subject) => (
                <li key={subject} className="chip chip--soft">
                  {subject}
                </li>
              ))}
            </ul>
          </div>

          <div className="collaborate__form-wrap">
            {submitted ? (
              <div className="booking-success">
                <p className="booking-success__title">
                  {COLLABORATE.successTitle}
                </p>
                <p className="booking-success__text">{COLLABORATE.successText}</p>
                <div className="booking-success__summary">
                  <p>
                    <span className="summary__label">Name</span>
                    <span className="summary__value">{name}</span>
                  </p>
                  <p>
                    <span className="summary__label">Subjects</span>
                    <span className="summary__value">{subjects}</span>
                  </p>
                </div>
                <button type="button" className="btn btn--primary" onClick={reset}>
                  Start again
                </button>
              </div>
            ) : (
              <form className="collaborate__form" onSubmit={submit}>
                <div className="field">
                  <label htmlFor="collab-name">Your name</label>
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
                  <label htmlFor="collab-email">Email or contact</label>
                  <input
                    id="collab-email"
                    type="text"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value)
                      setError('')
                    }}
                  />
                </div>
                <div className="field">
                  <label htmlFor="collab-subjects">Subjects you can teach</label>
                  <input
                    id="collab-subjects"
                    type="text"
                    placeholder="For example: Physics, Additional Mathematics"
                    value={subjects}
                    onChange={(event) => {
                      setSubjects(event.target.value)
                      setError('')
                    }}
                  />
                </div>
                <div className="field">
                  <label htmlFor="collab-resume">Resume (paste a link or a short summary)</label>
                  <textarea
                    id="collab-resume"
                    rows="3"
                    value={resume}
                    onChange={(event) => setResume(event.target.value)}
                  />
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
        </div>
      </div>
    </section>
  )
}

export default Collaborate