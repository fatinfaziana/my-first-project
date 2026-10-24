import { useState } from 'react'
import { PRODUCTS } from '../data/sampleData'
import { useReveal } from '../hooks/useReveal'

const AUDIENCES = [
  { id: 'students', label: 'For students', blurb: 'Scanners, checkers and completed notes.' },
  { id: 'teachers', label: 'For teachers', blurb: 'Tools that cut marking time.' },
]

function Products() {
  const gridRef = useReveal()
  const [audience, setAudience] = useState('students')

  const items = PRODUCTS.items.filter((item) => item.audience === audience)

  return (
    <section id="products" className="section" aria-labelledby="products-heading">
      <p className="eyebrow">Products</p>
      <h2 id="products-heading">{PRODUCTS.heading}</h2>
      <p className="section__lead">{PRODUCTS.note}</p>

      <div className="section__body reveal" ref={gridRef}>
        <div className="option-grid option-grid--audience">
          {AUDIENCES.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`option${audience === item.id ? ' option--selected' : ''}`}
              aria-pressed={audience === item.id}
              onClick={() => setAudience(item.id)}
            >
              <span className="option__title">{item.label}</span>
              <span className="option__meta">{item.blurb}</span>
            </button>
          ))}
        </div>

        <div className="cards-grid cards-grid--products">
          {items.map((product) => (
            <article key={product.id} className="card product-card">
              <div className="product-card__media" aria-hidden="true">
                <svg viewBox="0 0 48 48" width="40" height="40">
                  <rect x="8" y="8" width="32" height="32" rx="6" fill="none" stroke="currentColor" strokeWidth="3" />
                  <path d="M17 24l5 5 9-11" fill="none" stroke="currentColor" strokeWidth="3" />
                </svg>
              </div>
              <h3 className="card__title">{product.name}</h3>
              <p className="card__text">{product.description}</p>
              {product.options && (
                <ul className="product-options">
                  {product.options.map((option) => (
                    <li key={option} className="product-options__item">
                      {option}
                    </li>
                  ))}
                </ul>
              )}
              <p className="card__price nums">
                RM {product.price}
                {product.optionsNote && (
                  <span className="card__price-note"> · {product.optionsNote}</span>
                )}
              </p>
            </article>
          ))}
        </div>
      </div>

      <p className="price-note">
        Scanners, checkers and the marking helper run with the backend and AI
        service. Nothing is scanned or uploaded on this sample page.
      </p>
    </section>
  )
}

export default Products