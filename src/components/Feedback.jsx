import { useState } from 'react'
import { FEEDBACK } from '../data/sampleData'
import { useReveal } from '../hooks/useReveal'

function Avatar({ tone }) {
  return (
    <span className={`avatar avatar--${tone}`} aria-hidden="true">
      <svg viewBox="0 0 40 40" width="34" height="34">
        <circle cx="20" cy="15" r="7" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M8 36c0-6.6 5.4-11 12-11s12 4.4 12 11" fill="none" stroke="currentColor" strokeWidth="2.5" />
      </svg>
    </span>
  )
}

function Stars({ rating }) {
  return (
    <span className="stars" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          viewBox="0 0 24 24"
          width="16"
          height="16"
          className={star <= rating ? 'stars__on' : 'stars__off'}
          aria-hidden="true"
        >
          <path
            d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"
            fill="currentColor"
          />
        </svg>
      ))}
    </span>
  )
}

function Feedback() {
  const gridRef = useReveal()
  const formRef = useReveal()
  const [parentName, setParentName] = useState('')
  const [childName, setChildName] = useState('')
  const [subject, setSubject] = useState('')
  const [rating, setRating] = useState(5)
  const [comment, setComment] = useState('')
  const [photoName, setPhotoName] = useState('')
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const items = [...FEEDBACK.items].sort((a, b) => b.rating - a.rating)

  function sendComment(event) {
    event.preventDefault()
    if (!parentName.trim()) {
      setError('Add your name.')
      return
    }
    if (!comment.trim()) {
      setError('Write your feedback.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  return (
    <section id="feedback" className="section" aria-labelledby="feedback-heading">
      <p className="eyebrow">Feedback</p>
      <h2 id="feedback-heading">{FEEDBACK.heading}</h2>

      <div className="cards-grid cards-grid--feedback reveal" ref={gridRef}>
        {items.map((item) => (
          <article key={item.id} className="card feedback-card">
            <div className="feedback-card__top">
              <div className="feedback-card__photos">
                <Avatar tone={item.tone} />
                <Avatar tone={item.tone} />
              </div>
              <Stars rating={item.rating} />
            </div>
            <p className="feedback-card__quote">“{item.quote}”</p>
            <p className="feedback-card__who">
              <span className="feedback-card__name">{item.parentName} (parent)</span>
              <span className="feedback-card__subject">
                {item.childName} · {item.subject}
              </span>
            </p>
          </article>
        ))}
      </div>

      <div className="feedback-leave reveal" ref={formRef}>
        <h3 className="subheading">Leave your feedback</h3>
        {submitted ? (
          <div className="booking-success">
            <p className="booking-success__title">
              Thank you — your feedback is ready.
            </p>
            <p className="booking-success__text">
              This is a sample page, nothing was sent or saved.
            </p>
            <button
              type="button"
              className="btn btn--primary"
              onClick={() => {
                setSubmitted(false)
                setParentName('')
                setChildName('')
                setSubject('')
                setRating(5)
                setComment('')
                setPhotoName('')
              }}
            >
              Leave another
            </button>
          </div>
        ) : (
          <form className="feedback-form" onSubmit={sendComment}>
            <div className="field">
              <label htmlFor="fb-parent">Your name</label>
              <input
                id="fb-parent"
                type="text"
                value={parentName}
                onChange={(event) => {
                  setParentName(event.target.value)
                  setError('')
                }}
              />
            </div>
            <div className="field">
              <label htmlFor="fb-child">Student name</label>
              <input
                id="fb-child"
                type="text"
                value={childName}
                onChange={(event) => setChildName(event.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="fb-subject">Subject</label>
              <input
                id="fb-subject"
                type="text"
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="fb-rating">Rating</label>
              <select
                id="fb-rating"
                value={rating}
                onChange={(event) => setRating(Number(event.target.value))}
              >
                {[5, 4, 3, 2, 1].map((value) => (
                  <option key={value} value={value}>
                    {value} star{value > 1 ? 's' : ''}
                  </option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="fb-comment">Your feedback</label>
              <textarea
                id="fb-comment"
                rows="4"
                value={comment}
                onChange={(event) => {
                  setComment(event.target.value)
                  setError('')
                }}
              />
            </div>
            <div className="field">
              <label htmlFor="fb-photo">Add a photo (optional)</label>
              <input
                id="fb-photo"
                type="file"
                accept="image/*"
                onChange={(event) => setPhotoName(event.target.files?.[0]?.name ?? '')}
              />
              {photoName && <p className="field__hint">Selected: {photoName}</p>}
            </div>
            <p className="booking__error" role="alert">
              {error}
            </p>
            <button type="submit" className="btn btn--primary">
              Send feedback
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default Feedback