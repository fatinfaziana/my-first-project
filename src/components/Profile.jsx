import { PROFILE } from '../data/sampleData'
import { useReveal } from '../hooks/useReveal'

function Profile() {
  const leftRef = useReveal()
  const rightRef = useReveal()

  return (
    <section id="profile" className="section" aria-labelledby="profile-heading">
      <p className="eyebrow">Profile</p>
      <h2 id="profile-heading">{PROFILE.heading}</h2>

      <div className="profile-split">
        <div className="profile-split__text reveal" ref={leftRef}>
          <p className="section__lead">{PROFILE.intro}</p>
          {PROFILE.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <aside className="profile-split__card reveal" ref={rightRef} aria-label="Tutor snapshot">
          <div className="hero__portrait" aria-hidden="true">
            <svg viewBox="0 0 64 64" width="56" height="56">
              <circle cx="32" cy="22" r="12" fill="none" stroke="currentColor" strokeWidth="3" />
              <path d="M12 56c0-11 9-18 20-18s20 7 20 18" fill="none" stroke="currentColor" strokeWidth="3" />
            </svg>
          </div>
          <h3 className="hero__card-name">{PROFILE.name}</h3>
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
        </aside>
      </div>
    </section>
  )
}

export default Profile