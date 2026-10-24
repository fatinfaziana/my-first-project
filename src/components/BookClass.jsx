import { useState } from 'react'
import {
  AVAILABILITY,
  CLASS_TYPES,
  MODES,
  PACKAGES,
  SUBJECT_CATALOGUE,
  subjectPriceFor,
} from '../data/sampleData'
import { useReveal } from '../hooks/useReveal'

const STEP_LABELS = [
  'Stage & syllabus',
  'Subjects',
  'Class type',
  'Package',
  'Time & contact',
]

function BookClass() {
  const bodyRef = useReveal()

  const [step, setStep] = useState(0)
  const [stage, setStage] = useState('')
  const [syllabus, setSyllabus] = useState('')
  const [subjectNames, setSubjectNames] = useState([])
  const [classType, setClassType] = useState('group')
  const [mode, setMode] = useState('online')
  const [packageId, setPackageId] = useState('')
  const [slotId, setSlotId] = useState('')
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const stageData = SUBJECT_CATALOGUE.find((item) => item.id === stage)
  const subjectList = stageData?.syllabuses[syllabus]?.subjects ?? []
  const chosenSubjects = subjectList.filter((subject) =>
    subjectNames.includes(subject.name),
  )
  const chosenPackage = PACKAGES.find((item) => item.id === packageId)
  const isCombo = chosenPackage ? chosenPackage.id !== 'single' : false

  const price = chosenSubjects.reduce(
    (total, subject) =>
      total + subjectPriceFor(subject.price, classType, mode, isCombo),
    0,
  )

  function toggleSubject(subjectName) {
    setSubjectNames((current) =>
      current.includes(subjectName)
        ? current.filter((item) => item !== subjectName)
        : [...current, subjectName],
    )
  }

  function goNext() {
    if (step === 0 && (!stage || !syllabus)) {
      setError('Choose a stage and a syllabus to continue.')
      return
    }
    if (step === 1 && subjectNames.length < 1) {
      setError('Pick at least one subject.')
      return
    }
    if (step === 3 && !packageId) {
      setError('Choose a package.')
      return
    }
    setError('')
    setStep((current) => Math.min(4, current + 1))
  }

  function goBack() {
    setError('')
    setStep((current) => Math.max(0, current - 1))
  }

  function submit() {
    if (!slotId) {
      setError('Pick a preferred time.')
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
    setStage('')
    setSyllabus('')
    setSubjectNames([])
    setClassType('group')
    setMode('online')
    setPackageId('')
    setSlotId('')
    setName('')
    setContact('')
    setError('')
    setSubmitted(false)
  }

  return (
    <div className="booking-hub__panel">
      <h3 className="booking-hub__panel-title">Book a class</h3>
      <p className="section__lead">
        Five short steps. Nothing is sent or saved on this sample page.
      </p>

      <div className="booking reveal" ref={bodyRef}>
        {submitted ? (
          <div className="booking-success">
            <p className="booking-success__title">
              Thank you — your enquiry is ready.
            </p>
            <p className="booking-success__text">
              This is a sample page, nothing was sent or saved.
            </p>
            <div className="booking-success__summary">
              <p>
                <span className="summary__label">Stage</span>
                <span className="summary__value">
                  {stageData?.label} · {syllabus}
                </span>
              </p>
              <p>
                <span className="summary__label">Subjects</span>
                <span className="summary__value">{subjectNames.join(', ')}</span>
              </p>
              <p>
                <span className="summary__label">Class type</span>
                <span className="summary__value">
                  {CLASS_TYPES[classType].label} · {MODES[mode].label}
                </span>
              </p>
              <p>
                <span className="summary__label">Package</span>
                <span className="summary__value">{chosenPackage?.name}</span>
              </p>
              <p>
                <span className="summary__label">Price</span>
                <span className="summary__value nums">RM {price} / month</span>
              </p>
              <p>
                <span className="summary__label">Preferred time</span>
                <span className="summary__value">{slotId || '—'}</span>
              </p>
            </div>
            <button type="button" className="btn btn--primary" onClick={reset}>
              Start again
            </button>
          </div>
        ) : (
          <>
            <p className="booking__step">
              Step {step + 1} of 5 · {STEP_LABELS[step]}
            </p>

            {step === 0 && (
              <>
                <fieldset className="booking__fieldset">
                  <legend className="booking__legend">Stage</legend>
                  <div className="chip-row">
                    {SUBJECT_CATALOGUE.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        className={`chip chip--button${stage === item.id ? ' chip--active' : ''}`}
                        aria-pressed={stage === item.id}
                        onClick={() => {
                          setStage(item.id)
                          setSyllabus('')
                          setSubjectNames([])
                          setError('')
                        }}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </fieldset>

                {stage && (
                  <fieldset className="booking__fieldset">
                    <legend className="booking__legend">Syllabus</legend>
                    <div className="chip-row">
                      {['national', 'international'].map((key) => (
                        <button
                          key={key}
                          type="button"
                          className={`chip chip--button${syllabus === key ? ' chip--active' : ''}`}
                          aria-pressed={syllabus === key}
                          onClick={() => {
                            setSyllabus(key)
                            setSubjectNames([])
                            setError('')
                          }}
                        >
                          {key === 'national' ? 'National' : 'International'}
                        </button>
                      ))}
                    </div>
                  </fieldset>
                )}
              </>
            )}

            {step === 1 && (
              <fieldset className="booking__fieldset">
                <legend className="booking__legend">
                  Which subjects? Pick one or more.
                </legend>
                <div className="chip-row">
                  {subjectList.map((subject) => (
                    <button
                      key={subject.name}
                      type="button"
                      className={`chip chip--button${subjectNames.includes(subject.name) ? ' chip--active' : ''}`}
                      aria-pressed={subjectNames.includes(subject.name)}
                      onClick={() => {
                        toggleSubject(subject.name)
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
              <>
                <fieldset className="booking__fieldset">
                  <legend className="booking__legend">Class type</legend>
                  <div className="chip-row">
                    {Object.values(CLASS_TYPES).map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        className={`chip chip--button${classType === type.id ? ' chip--active' : ''}`}
                        aria-pressed={classType === type.id}
                        onClick={() => {
                          setClassType(type.id)
                          setError('')
                        }}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <fieldset className="booking__fieldset">
                  <legend className="booking__legend">Online or in person</legend>
                  <div className="chip-row">
                    {Object.values(MODES).map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        className={`chip chip--button${mode === item.id ? ' chip--active' : ''}`}
                        aria-pressed={mode === item.id}
                        onClick={() => {
                          setMode(item.id)
                          setError('')
                        }}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </fieldset>
              </>
            )}

            {step === 3 && (
              <div className="booking__fieldset">
                <p className="booking__legend">Choose your package</p>
                <div className="cards-grid cards-grid--packages">
                  {PACKAGES.map((pack) => (
                    <button
                      key={pack.id}
                      type="button"
                      className={`package-choice${packageId === pack.id ? ' package-choice--selected' : ''}${pack.popular ? ' package-choice--popular' : ''}`}
                      aria-pressed={packageId === pack.id}
                      onClick={() => {
                        setPackageId(pack.id)
                        setError('')
                      }}
                    >
                      {pack.tag && (
                        <span className="tag tag--action">{pack.tag}</span>
                      )}
                      <span className="package-choice__name">{pack.name}</span>
                      <span className="package-choice__includes">
                        {pack.includes}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="booking__fieldset">
                <p className="tag tag--action booking__trial">
                  {AVAILABILITY.freeTrialChip}
                </p>
                <fieldset className="booking__fieldset booking__fieldset--inner">
                  <legend className="booking__legend">Pick a preferred time</legend>
                  <div className="option-grid option-grid--slots">
                    {[
                      'Mon 7:30 PM',
                      'Wed 7:30 PM',
                      'Thu 5:00 PM',
                      'Sat 10:00 AM',
                      'Sat 2:00 PM',
                      'Sun 10:00 AM',
                    ].map((label) => (
                      <button
                        key={label}
                        type="button"
                        className={`option${slotId === label ? ' option--selected' : ''}`}
                        aria-pressed={slotId === label}
                        onClick={() => {
                          setSlotId(label)
                          setError('')
                        }}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <div className="field">
                  <label htmlFor="book-name">Your name</label>
                  <input
                    id="book-name"
                    type="text"
                    value={name}
                    onChange={(event) => {
                      setName(event.target.value)
                      setError('')
                    }}
                  />
                </div>
                <div className="field">
                  <label htmlFor="book-contact">Contact (phone or email)</label>
                  <input
                    id="book-contact"
                    type="text"
                    value={contact}
                    onChange={(event) => setContact(event.target.value)}
                  />
                </div>
              </div>
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
              {step < 4 ? (
                <button type="button" className="btn btn--primary" onClick={goNext}>
                  Continue
                </button>
              ) : (
                <button type="button" className="btn btn--primary" onClick={submit}>
                  Send enquiry
                </button>
              )}
            </div>

            {price > 0 && (
              <p className="booking__preview nums">Running price: RM {price}</p>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default BookClass