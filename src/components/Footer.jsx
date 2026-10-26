import { CONTACT } from '../data/sampleData'

function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <p className="eyebrow">Contact</p>
      <h2>{CONTACT.heading}</h2>
      <ul className="footer-lines">
        <li>
          <a href={CONTACT.whatsapp.url} target="_blank" rel="noopener noreferrer">
            {CONTACT.whatsapp.label}
          </a>
        </li>
        <li>
          <a href={CONTACT.email.url}>{CONTACT.email.label}</a>
        </li>
      </ul>
      <p className="footer-disclaimer">{CONTACT.disclaimer}</p>
    </footer>
  )
}

export default Footer