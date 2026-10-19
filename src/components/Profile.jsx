import { PROFILE } from '../data/sampleData'
import { useReveal } from '../hooks/useReveal'

function Profile() {
  const bodyRef = useReveal()

  return (
    <section id="profile" className="section" aria-labelledby="profile-heading">
      <p className="eyebrow">Profile</p>
      <h2 id="profile-heading">{PROFILE.heading}</h2>
      <div className="section__body reveal" ref={bodyRef}>
        {PROFILE.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <ul className="check-list">
          {PROFILE.points.map((point) => (
            <li key={point}>
              <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
                <path
                  d="M2 8.5l4 4 8-9"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Profile