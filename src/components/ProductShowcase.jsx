import { useState } from 'react'
import { PRODUCTS } from '../data/sampleData'
import { useReveal } from '../hooks/useReveal'

function ProductShowcase() {
  const gridRef = useReveal()
  const [audience, setAudience] = useState('students')
  const [stage, setStage] = useState('secondary')
  const [department, setDepartment] = useState('all')

  const items = PRODUCTS.items.filter((item) => {
    if (item.audience !== audience) return false
    if (item.stage !== stage) return false
    if (department !== 'all' && item.department !== department) return false
    return true
  })

  return (
    <section id="products" className="section" aria-labelledby="products-heading">
      <p className="eyebrow">Products &amp; services</p>
      <h2 id="products-heading">{PRODUCTS.heading}</h2>
      <p className="section__lead">{PRODUCTS.note}</p>

      <div className="section__body reveal" ref={gridRef}>
        <div className="product-filters">
          <div className="product-filters__group">
            <p className="product-filters__label">Who is it for?</p>
            <div className="option-grid option-grid--audience">
              {PRODUCTS.audiences.map((item) => (
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
          </div>

          <div className="product-filters__group">
            <p className="product-filters__label">Stage</p>
            <div className="chip-row">
              {PRODUCTS.stages.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`chip chip--button${stage === item.id ? ' chip--active' : ''}`}
                  aria-pressed={stage === item.id}
                  onClick={() => setStage(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="product-filters__group">
            <p className="product-filters__label">Department</p>
            <div className="chip-row">
              {PRODUCTS.departments.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`chip chip--button${department === item.id ? ' chip--active' : ''}`}
                  aria-pressed={department === item.id}
                  onClick={() => setDepartment(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {items.length > 0 ? (
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
                <p className="card__price nums">RM {product.price}</p>
              </article>
            ))}
          </div>
        ) : (
          <p className="product-empty">{PRODUCTS.emptyNote}</p>
        )}
      </div>
    </section>
  )
}

export default ProductShowcase