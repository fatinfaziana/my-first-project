import { NAV_LINKS, PROFILE, SITE_NAME, TAGLINE } from '../data/sampleData'

function Header() {
  return (
    <header className="topbar">
      <a className="topbar__profile" href="#profile">
        <img className="topbar__avatar" src={PROFILE.photo} alt="The tutor" />
        <span className="topbar__identity">
          <strong>{SITE_NAME}</strong>
          <span><b>Available for work</b><em>Follow</em></span>
        </span>
      </a>
      <span className="visually-hidden">{TAGLINE}</span>
      <div className="topbar__actions">
        <a className="round-action" href="#feedback" aria-label="Feedback">♡</a>
        <a className="round-action" href="#products" aria-label="Products">▱</a>
        <a className="topbar__cta" href="#contact">Get in touch</a>
      </div>
      <nav className="topbar__nav" aria-label="Page sections">
        {NAV_LINKS.map((link) => (
          <a key={link.id} href={`#${link.id}`}>{link.label}</a>
        ))}
      </nav>
    </header>
  )
}

export default Header