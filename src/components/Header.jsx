import { NAV_LINKS, SITE_NAME, TAGLINE } from '../data/sampleData'

function Header() {
  return (
    <header className="site-header">
      <div className="site-header__top">
        <div>
          <h1 className="site-header__name">{SITE_NAME}</h1>
          <p className="tagline">{TAGLINE}</p>
          <p className="sample-note">Sample data</p>
        </div>
        <nav className="site-nav" aria-label="Page sections">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header