import {
  CLASS_TYPES,
  MODES,
  PACKAGES,
  SUBJECTS_INTRO,
  SUBJECT_CATALOGUE,
  subjectPriceFor,
} from '../data/sampleData'
import { useReveal } from '../hooks/useReveal'

const LOW = 'group'
const HIGH = 'oneToOne'

function rangeFor(basePrice) {
  const low = subjectPriceFor(basePrice, LOW, 'online', true)
  const high = subjectPriceFor(basePrice, HIGH, 'inPerson', false)
  return { low, high }
}

function SubjectsOffered() {
  const bodyRef = useReveal()

  return (
    <section id="subjects" className="section" aria-labelledby="subjects-heading">
      <p className="eyebrow">Subjects</p>
      <h2 id="subjects-heading">{SUBJECTS_INTRO.heading}</h2>
      <p className="section__lead">
        Every subject we teach, with its price range. Group classes (2–4) and
        online cost less; one-to-one costs more. The combo gives a further
        discount. Book in the next section.
      </p>

      <div className="section__body reveal" ref={bodyRef}>
        <div className="rate-note">
          <p className="rate-note__title">How the price changes</p>
          <ul className="chip-list">
            {Object.values(CLASS_TYPES).map((type) => (
              <li key={type.id} className="chip chip--soft">
                {type.label}
                {type.factor > 1 ? ' costs more' : ' costs less'}
              </li>
            ))}
            {Object.values(MODES).map((mode) => (
              <li key={mode.id} className="chip chip--soft">
                {mode.label}
                {mode.factor < 1 ? ' costs less' : ' costs more'}
              </li>
            ))}
            <li className="chip chip--soft">Combo subjects cost less</li>
          </ul>
        </div>

        {SUBJECT_CATALOGUE.map((stage) => (
          <div key={stage.id} className={`stage-block stage-block--${stage.color}`}>
            <h3 className="stage-block__name">{stage.label}</h3>
            <div className="stage-block__columns">
              {Object.entries(stage.syllabuses).map(([key, syllabus]) => (
                <div key={key} className="syllabus-block">
                  <p className="syllabus-block__label">{syllabus.label}</p>
                  <ul className="row-list">
                    {syllabus.subjects.map((subject) => {
                      const { low, high } = rangeFor(subject.price)
                      return (
                        <li key={subject.name} className="row">
                          <span className="row__title">{subject.name}</span>
                          <span className="row__amount nums">
                            RM {low}–{high}
                          </span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}

        <h3 className="subheading">Combo packages</h3>
        <div className="cards-grid cards-grid--packages">
          {PACKAGES.map((pack) => (
            <article
              key={pack.id}
              className={`card package-card${pack.popular ? ' package-card--popular' : ''}`}
            >
              {pack.tag && <span className="tag tag--action">{pack.tag}</span>}
              <h4 className="card__title">{pack.name}</h4>
              <p className="card__text">{pack.includes}</p>
              <p className="card__price nums">
                {pack.id === 'single'
                  ? 'Group from RM 31/month'
                  : pack.id === 'combo-two'
                    ? 'From RM 47/month'
                    : 'From RM 63/month'}
              </p>
              <p className="package-card__range">
                One-to-one and in person costs more.
              </p>
            </article>
          ))}
        </div>

        <p className="price-note">
          Sample figures only. Prices are worked out from each subject's base
          price, the class type, the mode and whether it is a combo. No advising
          or recommending.
        </p>
      </div>
    </section>
  )
}

export default SubjectsOffered