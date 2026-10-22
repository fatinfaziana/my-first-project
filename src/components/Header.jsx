import { useState } from 'react'
import { NAV_LINKS, SITE_NAME, TAGLINE } from '../data/sampleData'

function SidebarIcon({ name }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }

  switch (name) {
    case 'profile':
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
        </svg>
      )
    case 'subjects':
      return (
        <svg {...common}>
          <path d="M4 5h7v14H4z" />
          <path d="M13 5h7v14h-7z" />
        </svg>
      )
    case 'calendar':
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M3 10h18M8 3v4M16 3v4" />
        </svg>
      )
    case 'feedback':
      return (
        <svg {...common}>
          <path d="M21 12a8 8 0 0 1-11.5 7.1L4 21l1.9-5.5A8 8 0 1 1 21 12z" />
        </svg>
      )
    case 'products':
      return (
        <svg {...common}>
          <path d="M3 7l9-4 9 4-9 4-9-4z" />
          <path d="M3 7v10l9 4 9-4V7" />
        </svg>
      )
    case 'collaborate':
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3" />
          <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
          <path d="M18 8v6M15 11h6" />
        </svg>
      )
    case 'book':
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M8 3v4M16 3v4M8 13l2.5 2.5L16 10" />
        </svg>
      )
    default:
      return null
  }
}

function Sidebar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        className="sidebar__toggle"
        aria-expanded={open}
        aria-controls="sidebar-nav"
        onClick={() => setOpen((current) => !current)}
      >
        <span className="sidebar__toggle-lines" aria-hidden="true" />
        Menu
      </button>

      <aside
        id="sidebar-nav"
        className={`sidebar${open ? ' sidebar--open' : ''}`}
      >
        <div className="sidebar__brand">
          <span className="sidebar__mark" aria-hidden="true">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 12l8-6 8 6-8 6-8-6z"
                fill="currentColor"
                opacity="0.9"
              />
              <path d="M8 15v3.5c0 1 1.8 2 4 2s4-1 4-2V15" stroke="currentColor" strokeWidth="1.6" fill="none" />
            </svg>
          </span>
          <span className="sidebar__brand-text">
            <span className="sidebar__name">{SITE_NAME}</span>
            <span className="sidebar__tag">{TAGLINE}</span>
          </span>
        </div>

        <nav className="sidebar__nav" aria-label="Page sections">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`sidebar__link sidebar__link--${link.id}`}
                  onClick={() => setOpen(false)}
                >
                  <SidebarIcon name={link.icon} />
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="sidebar__note">Sample data only</p>
      </aside>

      {open && (
        <button
          type="button"
          className="sidebar__scrim"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  )
}

export default Sidebar