import { PRODUCTS } from '../data/sampleData'
import { useReveal } from '../hooks/useReveal'

function ProductShowcase() {
  const gridRef = useReveal()

  return (
    <section id="products" className="section" aria-labelledby="products-heading">
      <p className="eyebrow">Products</p>
      <h2 id="products-heading">{PRODUCTS.heading}</h2>
      <p className="section__lead">{PRODUCTS.note}</p>

      <div className="cards-grid cards-grid--products reveal" ref={gridRef}>
        {PRODUCTS.items.map((product) => (
          <article key={product.id} className="card product-card">
            <div className="product-card__media" aria-hidden="true">
              <svg viewBox="0 0 48 48" width="40" height="40">
                <rect x="8" y="8" width="32" height="32" rx="6" fill="none" stroke="currentColor" strokeWidth="3" />
                <path d="M17 24l5 5 9-11" fill="none" stroke="currentColor" strokeWidth="3" />
              </svg>
            </div>
            <h3 className="card__title">{product.name}</h3>
            <p className="card__text">{product.description}</p>
            <p className="card__price nums">
              RM {product.price}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProductShowcase