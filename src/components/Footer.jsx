import { CONTACT } from '../data/sampleData'

function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <p className="eyebrow">Contact</p>
      <h2>{CONTACT.heading}</h2>
      <ul className="footer-lines">
        {CONTACT.lines.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
      <p className="footer-disclaimer">{CONTACT.disclaimer}</p>
    </footer>
  )
}

export default Footer