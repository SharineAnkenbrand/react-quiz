import styled from 'styled-components';
import QuizCard from './QuizCard';
import ryan from '../images/ryan.jpeg';

export default function CardBoxContainer({
  showScore,
  score,
  quizCard,
  currentQuestion,
  onHandleAnswerOptionClick,
  isSuccess,
  isError,
}) {
  return (
    <BoxContainer>
      <Left></Left>
      <Right>
        <QuizCard
          showScore={showScore}
          score={score}
          quizCard={quizCard}
          currentQuestion={currentQuestion}
          onHandleAnswerOptionClick={onHandleAnswerOptionClick}
          isSuccess={isSuccess}
          isError={isError}
        />
      </Right>
    </BoxContainer>
  );
}

const BoxContainer = styled.section`
  background-color: var(--white);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: absolute;
  bottom: 0;
  height: 70vh;
  width: 100vw;

  @media (max-width: 375px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

const Left = styled.article`
  background-image: url(${ryan});
  background-attachment: center;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Right = styled.article`
  padding: 1rem;

  @media (max-width: 375px) {
    height: 70vh;
  }
`;
