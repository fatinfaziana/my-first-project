import { useState } from 'react'
import {
  COMBO_EXTRA_PRICE,
  COURSE_COLORS,
  LEVELS,
  OBJECTIVE_PRICE,
  PACKAGES,
  priceForSubjects,
} from '../data/sampleData'
import { useReveal } from '../hooks/useReveal'

function SubjectsPricing() {
  const bodyRef = useReveal()
  const [openPackage, setOpenPackage] = useState(null)

  const packagePrice = {
    single: priceForSubjects(LEVELS[0].id, [LEVELS[0].subjects[0].id]),
    'combo-two': priceForSubjects(LEVELS[0].id, [
      LEVELS[0].subjects[0].id,
      LEVELS[0].subjects[1].id,
    ]),
    'combo-three': priceForSubjects(LEVELS[0].id, [
      LEVELS[0].subjects[0].id,
      LEVELS[0].subjects[1].id,
      LEVELS[0].subjects[2].id,
    ]),
  }

  return (
    <section id="subjects" className="section" aria-labelledby="subjects-heading">
      <p className="eyebrow">What you can study</p>
      <h2 id="subjects-heading">Subjects and levels we cover</h2>

      <div className="section__body reveal" ref={bodyRef}>
        <p className="section__lead">
          All the levels and subjects we teach are listed below. Prices are shown
          with the combo packages further down.
        </p>

        <div className="levels-grid">
          {LEVELS.map((level) => (
            <div
              key={level.id}
              className={`level-block level-block--${COURSE_COLORS[level.id]}`}
            >
              <h3 className="level-block__name">{level.name}</h3>
              <ul className="subject-list">
                {level.subjects.map((subject) => (
                  <li key={subject.id} className="subject-list__item">
                    <span className="subject-list__dot" aria-hidden="true" />
                    {subject.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="subheading">Combo packages</h3>
        <p className="section__lead">
          Press a package to see what it includes and its price.
        </p>
        <div className="cards-grid cards-grid--packages">
          {PACKAGES.map((pack) => {
            const isOpen = openPackage === pack.id
            return (
              <article
                key={pack.id}
                className={`card package-card${pack.popular ? ' package-card--popular' : ''}${isOpen ? ' package-card--open' : ''}`}
              >
                {pack.popular && <span className="tag tag--action">Most popular</span>}
                <h4 className="card__title">{pack.name}</h4>
                <p className="card__text">{pack.includes}</p>
                {isOpen ? (
                  <div className="package-card__price-block">
                    <p className="card__price nums">
                      RM {packagePrice[pack.id]}
                      <span className="card__price-note"> per month</span>
                    </p>
                    <ul className="price-panel__lines">
                      <li>
                        <span>First subject</span>
                        <span className="nums">RM {OBJECTIVE_PRICE}</span>
                      </li>
                      {pack.id !== 'single' && (
                        <li>
                          <span>
                            {pack.id === 'combo-two' ? 'Second subject' : 'Extra subjects'}{' '}
                            (combo rate)
                          </span>
                          <span className="nums">
                            RM{' '}
                            {pack.id === 'combo-two'
                              ? COMBO_EXTRA_PRICE
                              : `${COMBO_EXTRA_PRICE} each`}
                          </span>
                        </li>
                      )}
                    </ul>
                    <button
                      type="button"
                      className="btn btn--ghost package-card__hide"
                      onClick={() => setOpenPackage(null)}
                    >
                      Hide price
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    className="btn btn--secondary package-card__show"
                    aria-expanded={false}
                    onClick={() => setOpenPackage(pack.id)}
                  >
                    Choose package &amp; see price
                  </button>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SubjectsPricing