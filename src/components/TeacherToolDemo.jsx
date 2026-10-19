import { TEACHER_DEMO } from '../data/sampleData'
import { useReveal } from '../hooks/useReveal'

function TeacherToolDemo() {
  const textRef = useReveal()
  const cardRef = useReveal()

  return (
    <section id="teachers" className="band" aria-labelledby="teachers-heading">
      <div className="band__inner">
        <div className="band__text reveal" ref={textRef}>
          <p className="eyebrow eyebrow--light">{TEACHER_DEMO.eyebrow}</p>
          <h2 id="teachers-heading">{TEACHER_DEMO.heading}</h2>
          <p className="band__description">{TEACHER_DEMO.description}</p>
          <ol className="steps">
            {TEACHER_DEMO.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="tag tag--preview">
            Preview only — this is not a working tool tonight
          </p>
        </div>

        <div className="demo-card reveal" ref={cardRef} aria-label="Sample marked answer">
          <p className="demo-card__label">{TEACHER_DEMO.sample.label}</p>
          <p className="demo-card__question">{TEACHER_DEMO.sample.question}</p>
          <p className="demo-card__answer">{TEACHER_DEMO.sample.answer}</p>
          <ul className="demo-card__keywords">
            {TEACHER_DEMO.sample.keywords.map((keyword) => (
              <li key={keyword}>{keyword}</li>
            ))}
          </ul>
          <p className="demo-card__marks nums">
            Marks: {TEACHER_DEMO.sample.marks}
          </p>
        </div>
      </div>
    </section>
  )
}

export default TeacherToolDemo