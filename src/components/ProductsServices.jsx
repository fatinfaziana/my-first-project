import { useState } from 'react'
import {
  AVAILABILITY,
  PACKAGES,
  PRICES,
  SERVICES,
  SUBJECT_CATALOGUE,
  priceForSubjects,
} from '../data/sampleData'
import { useReveal } from '../hooks/useReveal'

const STEP_LABELS = ['Stage & syllabus', 'Subjects', 'Package', 'Time & contact']

function ProductsServices() {
  const bodyRef = useReveal()

  const [audience, setAudience] = useState('students')
  const [step, setStep] = useState(0)
  const [stage, setStage] = useState('')
  const [syllabus, setSyllabus] = useState('')
  const [subjectIds, setSubjectIds] = useState([])
  const [packageId, setPackageId] = useState('')
  const [slotId, setSlotId] = useState('')
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const stageData = SUBJECT_CATALOGUE.find((item) => item.id === stage)
  const subjectList = stageData?.syllabuses[syllabus]?.subjects ?? []
  const chosenSubjects = subjectList.filter((subject) =>
    subjectIds.includes(subject),
  )
  const chosenPackage = PACKAGES.find((item) => item.id === packageId)
  const price = priceForSubjects(chosenSubjects.length, chosenPackage?.extraRate)
  const services =
    audience === 'students' ? SERVICES.students : SERVICES.teachers

  function toggleSubject(subject) {
    setSubjectIds((current) =>
      current.includes(subject)
        ? current.filter((item) => item !== subject)
        : [...current, subject],
    )
  }

  function goNext() {
    if (step === 0) {
      if (!stage || !syllabus) {
        setError('Choose a stage and a syllabus to continue.')
        return
      }
    }
    if (step === 1 && subjectIds.length < 1) {
      setError('Pick at least one subject.')
      return
    }
    if (step === 2 && !packageId) {
      setError('Choose a package.')
      return
    }
    setError('')
    setStep((current) => Math.min(3, current + 1))
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
    setSubjectIds([])
    setPackageId('')
    setSlotId('')
    setName('')
    setContact('')
    setError('')
    setSubmitted(false)
  }

  return (
    <section id="services" className="section" aria-labelledby="services-heading">
      <p className="eyebrow">Products &amp; services</p>
      <h2 id="services-heading">{SERVICES.heading}</h2>
      <p className="section__lead">{SERVICES.note}</p>

      <div className="section__body reveal" ref={bodyRef}>
        <div className="option-grid option-grid--audience">
          {SERVICES.audiences.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`option${audience === item.id ? ' option--selected' : ''}`}
              aria-pressed={audience === item.id}
              onClick={() => {
                setAudience(item.id)
                if (item.id === 'teachers') setSubmitted(false)
              }}
            >
              <span className="option__title">{item.label}</span>
              <span className="option__meta">{item.blurb}</span>
            </button>
          ))}
        </div>

        <h3 className="subheading">Services offered</h3>
        <div className="cards-grid cards-grid--products">
          {services.map((service) => (
            <article key={service.id} className="card product-card">
              <h4 className="card__title">{service.name}</h4>
              <p className="card__text">{service.description}</p>
              <p className="card__price nums">
                {service.from ? 'From ' : ''}RM {service.price}
              </p>
            </article>
          ))}
        </div>

        {audience === 'teachers' ? (
          <div className="teacher-note">
            <p>
              Upload your marking scheme and the system scans it for the keywords
              of each answer. Then scan a student’s answer and it checks against
              those keywords, reading handwriting including hard-to-read writing.
            </p>
            <p className="tag tag--action">
              Preview only — the scanner and AI run with the backend
            </p>
          </div>
        ) : (
          <div className="booking">
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
                    <span className="summary__value">
                      {chosenSubjects.join(', ')}
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
                <h3 className="subheading">Book a class</h3>
                <p className="booking__step">
                  Step {step + 1} of 4 · {STEP_LABELS[step]}
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
                              setSubjectIds([])
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
                                setSubjectIds([])
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
                          key={subject}
                          type="button"
                          className={`chip chip--button${subjectIds.includes(subject) ? ' chip--active' : ''}`}
                          aria-pressed={subjectIds.includes(subject)}
                          onClick={() => {
                            toggleSubject(subject)
                            setError('')
                          }}
                        >
                          {subject}
                        </button>
                      ))}
                    </div>
                  </fieldset>
                )}

                {step === 2 && (
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
                          <span className="package-choice__price nums">
                            RM {priceForSubjects(
                              pack.id === 'single'
                                ? 1
                                : pack.id === 'combo-two'
                                  ? 2
                                  : 3,
                              pack.extraRate,
                            )}
                            <span className="card__price-note"> per month</span>
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="booking__fieldset">
                    <p className="tag tag--action booking__trial">
                      {AVAILABILITY.freeTrialChip}
                    </p>
                    <fieldset className="booking__fieldset booking__fieldset--inner">
                      <legend className="booking__legend">
                        Pick a preferred time
                      </legend>
                      <div className="option-grid option-grid--slots">
                        {[
                          'Mon 7:30 PM · Online',
                          'Wed 7:30 PM · Online',
                          'Thu 5:00 PM · In person',
                          'Sat 10:00 AM · In person',
                          'Sat 2:00 PM · Online',
                          'Sun 10:00 AM · Online',
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
                      <label htmlFor="svc-name">Your name</label>
                      <input
                        id="svc-name"
                        type="text"
                        value={name}
                        onChange={(event) => {
                          setName(event.target.value)
                          setError('')
                        }}
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="svc-contact">Contact (phone or email)</label>
                      <input
                        id="svc-contact"
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
                  {step < 3 ? (
                    <button type="button" className="btn btn--primary" onClick={goNext}>
                      Continue
                    </button>
                  ) : (
                    <button type="button" className="btn btn--primary" onClick={submit}>
                      Send enquiry
                    </button>
                  )}
                </div>

                {price > 0 && step < 2 && (
                  <p className="booking__preview nums">Running price: RM {price}</p>
                )}
              </>
            )}
          </div>
        )}

        <p className="price-note">
          Sample figures only: RM {PRICES.single} for the first subject, RM{' '}
          {PRICES.comboExtra} for each extra subject, RM {PRICES.mostPopularExtra}{' '}
          on the best-price combo. No advising or recommending.
        </p>
      </div>
    </section>
  )
}

export default ProductsServices