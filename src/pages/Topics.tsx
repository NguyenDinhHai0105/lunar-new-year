import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { TOPICS, type Topic } from '../data/topics'
import { randomFromArray } from '../utils/random'

type Selected = {
  topic: Topic
  question: string
}

export default function Topics() {
  const topics = useMemo(() => TOPICS, [])
  const [selected, setSelected] = useState<Selected | null>(null)

  const onPickTopic = (topic: Topic) => {
    const question = randomFromArray(topic.questions)
    setSelected({ topic, question })
  }

  const nextQuestion = () => {
    if (!selected) return
    const question = randomFromArray(selected.topic.questions, selected.question)
    setSelected({ topic: selected.topic, question })
  }

  return (
    <div className="page">
      <div className="topbar">
        <Link className="btn btn--ghost" to="/">
          Back
        </Link>
        <div className="topbar__title">Topics</div>
        <div className="topbar__spacer" />
      </div>

      <div className="topics-layout">
        <div className="panel">
          <div className="panel__title">Pick a topic</div>
          <div className="topic-list" role="list">
            {topics.map((t) => {
              const active = selected?.topic.id === t.id
              return (
                <button
                  key={t.id}
                  type="button"
                  className={active ? 'topic-chip topic-chip--active' : 'topic-chip'}
                  onClick={() => onPickTopic(t)}
                  role="listitem"
                >
                  {t.label}
                </button>
              )
            })}
          </div>
        </div>

        <div className="panel panel--question">
          <div className="panel__title">Question</div>

          {selected ? (
            <div className="question-card">
              <div className="question-card__topic">{selected.topic.label}</div>
              <div className="question-card__text">{selected.question}</div>
              <div className="question-card__actions">
                <button type="button" className="btn btn--primary" onClick={nextQuestion}>
                  Next question
                </button>
              </div>
            </div>
          ) : (
            <div className="question-empty">
              <div className="question-empty__title">Select a topic to begin</div>
              <div className="question-empty__text">
                Choose one on the left to get a random question.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

