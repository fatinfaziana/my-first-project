import { PACKAGES, PRICES, SUBJECTS_INTRO, SUBJECT_CATALOGUE } from '../data/sampleData'
import { useReveal } from '../hooks/useReveal'

function comboPrice(count, extraRate) {
  return PRICES.single + (count - 1) * (extraRate ?? PRICES.comboExtra)
}

function SubjectsOffered() {
  const bodyRef = useReveal()

  return (
    <section id="subjects" className="section" aria-labelledby="subjects-heading">
      <p className="eyebrow">Subjects</p>
      <h2 id="subjects-heading">{SUBJECTS_INTRO.heading}</h2>
      <p className="section__lead">
        Every subject we teach, with its price. Mix subjects to get a combo
        price. Book in the next section.
      </p>

      <div className="section__body reveal" ref={bodyRef}>
        {SUBJECT_CATALOGUE.map((stage) => (
          <div key={stage.id} className={`stage-block stage-block--${stage.color}`}>
            <h3 className="stage-block__name">{stage.label}</h3>
            <div className="stage-block__columns">
              {Object.entries(stage.syllabuses).map(([key, syllabus]) => (
                <div key={key} className="syllabus-block">
                  <p className="syllabus-block__label">{syllabus.label}</p>
                  <ul className="row-list">
                    {syllabus.subjects.map((subject) => (
                      <li key={subject} className="row">
                        <span className="row__title">{subject}</span>
                        <span className="row__amount nums">RM {PRICES.single}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}

        <h3 className="subheading">Combo packages</h3>
        <div className="cards-grid cards-grid--packages">
          {PACKAGES.map((pack) => {
            const count =
              pack.id === 'single' ? 1 : pack.id === 'combo-two' ? 2 : 3
            return (
              <article
                key={pack.id}
                className={`card package-card${pack.popular ? ' package-card--popular' : ''}`}
              >
                {pack.tag && <span className="tag tag--action">{pack.tag}</span>}
                <h4 className="card__title">{pack.name}</h4>
                <p className="card__text">{pack.includes}</p>
                <p className="card__price nums">
                  RM {comboPrice(count, pack.extraRate)}
                  <span className="card__price-note"> per month</span>
                </p>
              </article>
            )
          })}
        </div>

        <p className="price-note">
          Sample figures only: RM {PRICES.single} for the first subject, RM{' '}
          {PRICES.comboExtra} for each extra subject, RM {PRICES.mostPopularExtra}{' '}
          on the best-price combo. No advising or recommending.
        </p>
      </div>
    </section>
  )
}

export default SubjectsOffered