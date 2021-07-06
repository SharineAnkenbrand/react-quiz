import styled from 'styled-components';
import Information from './Information';
import MessageContainer from './MessageContainer';

export default function QuizCard({
  showScore,
  score,
  quizCard,
  currentQuestion,
  onHandleAnswerOptionClick,
  isSuccess,
  isError,
}) {
  return (
    <QuizCardContainer>
      {showScore ? (
        <ScoreResult>
          <span>
            Your total score: {score}/{quizCard.length}
          </span>
          <Information />
        </ScoreResult>
      ) : (
        <>
          <span>
            Question {currentQuestion + 1}/{quizCard.length}
          </span>
          <Question>{quizCard[currentQuestion].question}</Question>
          <AnswerOptions>
            {quizCard[currentQuestion].answerOptions.map((answerOption) => (
              <Answer
                onClick={() => {
                  onHandleAnswerOptionClick(answerOption.isCorrect);
                }}
              >
                {answerOption.answer}
              </Answer>
            ))}
            <MessageContainer isSuccess={isSuccess} isError={isError} />
          </AnswerOptions>
        </>
      )}
    </QuizCardContainer>
  );
}

const QuizCardContainer = styled.div`
  animation: slideUp 2s cubic-bezier(0.23, 1, 0.23, 1);

  @keyframes slideUp {
    from {
      transform: translateY(1040px);
    }
    to {
      transform: translateX(0);
    }
  }

  span {
    font-weight: bold;
    margin-bottom: 1rem;
    padding: 0 0 0.5rem;
    position: relative;
    text-transform: uppercase;
  }

  span:after {
    background-color: var(--accent);
    border-radius: 2px;
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    height: 0.4rem;
    width: 50%;
  }
`;

const ScoreResult = styled.div`
  font-size: var(--fs-500);
`;

const Question = styled.section`
  margin: 1.5rem 0;
`;

const AnswerOptions = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  gap: 0.5rem;
`;

const Answer = styled.div`
  display: grid;
  place-items: center;
  background-color: var(--grey-lightest);
  font-size: var(--fs-400);
  padding: 0.5rem;
  text-align: center;
  cursor: pointer;

  :hover {
    background-color: var(--grey);
  }
`;
