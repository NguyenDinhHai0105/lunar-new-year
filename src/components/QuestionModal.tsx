import React, { useMemo, useState, useEffect, useRef } from 'react';
import childhood from '../assets/question/childhood.png';
import friendship from '../assets/question/friendship.png';
import horseTimer from '../assets/question/horse_timer.png';
import image9 from '../assets/question/image_9.png';
import centerContent from '../assets/question/center_content.png';
import { TOPICS } from '../data/topics';
import { randomFromArray } from '../utils/random';

interface QuestionModalProps {
  onClose: () => void;
}

const QuestionModal: React.FC<QuestionModalProps> = ({ onClose }) => {
  const topicLookup = useMemo(() => {
    const map = new Map(TOPICS.map((topic) => [topic.id, topic] as const));
    return map;
  }, []);

  const [selected, setSelected] = useState<{ topicId: string; question: string } | null>(null);
  const [timerState, setTimerState] = useState<'idle' | 'notifying' | 'counting'>('idle');
  const timerRef = useRef<any>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const pickTopic = (topicId: string) => {
    const topic = topicLookup.get(topicId);
    if (!topic) return;

    const nextQuestion = randomFromArray(topic.questions, selected?.topicId === topicId ? selected.question : undefined);
    if (!nextQuestion) return;

    setSelected({ topicId, question: nextQuestion });
    
    // Reset timer if already running
    if (timerRef.current) clearTimeout(timerRef.current);
    setTimerState('idle');

    // Start timer sequence: Notify for 1s, then start 10s move
    setTimeout(() => {
      setTimerState('notifying');
      timerRef.current = setTimeout(() => {
        setTimerState('counting');
        // Reset to idle after 10s of counting
        timerRef.current = setTimeout(() => {
          setTimerState('idle');
        }, 10000);
      }, 1000);
    }, 50);
  };

  return (
    <div className="modal">
      <div className="modal__backdrop" onClick={onClose} />
      <div className="modal__panel question-modal-panel">
        <div className="modal__content question-modal__content">
          <div className="question-modal__layout">
            <div
              className={`question-modal__item question-modal__item--childhood${selected?.topicId === 'childhood' ? ' question-modal__item--active' : ''}`}
              role="button"
              tabIndex={0}
              onClick={() => pickTopic('childhood')}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') pickTopic('childhood');
              }}
            >
              <img src={childhood} alt="Tuổi Thơ" className="question-modal__img" />
              <span className="question-modal__tooltip">Tuổi Thơ</span>
            </div>
            <div
              className={`question-modal__item question-modal__item--love${selected?.topicId === 'love' ? ' question-modal__item--active' : ''}`}
              role="button"
              tabIndex={0}
              onClick={() => pickTopic('love')}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') pickTopic('love');
              }}
            >
              <img src={image9} alt="Tình Yêu" className="question-modal__img" />
              <span className="question-modal__tooltip">Tình Yêu</span>
            </div>
            <div
              className={`question-modal__item question-modal__item--friends${selected?.topicId === 'friends' ? ' question-modal__item--active' : ''}`}
              role="button"
              tabIndex={0}
              onClick={() => pickTopic('friends')}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') pickTopic('friends');
              }}
            >
              <img src={friendship} alt="Bạn Bè" className="question-modal__img" />
              <span className="question-modal__tooltip">Bạn Bè</span>
            </div>
            <div className="question-modal__main">
              <div className="question-modal__banner">
                <img src={centerContent} alt="Question" className="question-modal__img-main" />
                <div className="question-modal__question-text">
                  {selected?.question ?? 'Chọn một chủ đề để bắt đầu'}
                </div>
              </div>
            </div>
            <div className={`question-modal__timer timer--${timerState}`}>
              <img src={horseTimer} alt="Timer" className="question-modal__img-timer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionModal;
