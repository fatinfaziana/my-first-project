import {
  COMBO_EXTRA_PRICE,
  LEVELS,
  OBJECTIVE_PRICE,
  PACKAGES,
  priceForSubjects,
} from '../data/sampleData'
import { useReveal } from '../hooks/useReveal'

function SubjectsPricing() {
  const bodyRef = useReveal()

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
      <p className="eyebrow">Subjects &amp; prices</p>
      <h2 id="subjects-heading">What you can study</h2>

      <div className="section__body reveal" ref={bodyRef}>
        <p className="section__lead">
          Pick a level, then the subjects you want. A single subject is RM{' '}
          {OBJECTIVE_PRICE}; each extra subject in a combo is RM{' '}
          {COMBO_EXTRA_PRICE}. Prices are per month and shown as figures only.
        </p>

        <div className="levels-grid">
          {LEVELS.map((level) => (
            <div key={level.id} className="level-block">
              <h3 className="level-block__name">{level.name}</h3>
              <ul className="row-list">
                {level.subjects.map((subject) => (
                  <li key={subject.id} className="row">
                    <div className="row__main">
                      <span className="row__title">{subject.name}</span>
                      <span className="row__meta">{subject.level}</span>
                    </div>
                    <span className="row__amount nums">RM {OBJECTIVE_PRICE}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="subheading">Combo packages</h3>
        <div className="cards-grid cards-grid--packages">
          {PACKAGES.map((pack) => (
            <article
              key={pack.id}
              className={`card package-card${pack.popular ? ' package-card--popular' : ''}`}
            >
              {pack.popular && <span className="tag tag--action">Most popular</span>}
              <h4 className="card__title">{pack.name}</h4>
              <p className="card__text">{pack.includes}</p>
              <p className="card__price nums">
                RM {packagePrice[pack.id]}
                <span className="card__price-note"> per month</span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SubjectsPricing