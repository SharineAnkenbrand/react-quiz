import React, { useState } from 'react';
import styled from 'styled-components';

import Title from './components/Title';
import CardBoxContainer from './components/CardBoxContainer';
import { quizQnA } from './lib/quizData';

export default function App() {
  const [quizCard, setQuizCard] = useState(quizQnA);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setTimeout(() => {
        setIsSuccess(true);
      }, 200);
      setScore(score + 1);
    } else {
      setTimeout(() => {
        setIsError(true);
      }, 200);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizCard.length) {
      setTimeout(() => {
        setIsSuccess(false);
        setIsError(false);
        setCurrentQuestion(nextQuestion);
      }, 1000);
    } else {
      setShowScore(true);
    }
  };

  return (
    <>
      <Main>
        <Title />
        <CardBoxContainer
          showScore={showScore}
          score={score}
          quizCard={quizCard}
          currentQuestion={currentQuestion}
          onHandleAnswerOptionClick={handleAnswerOptionClick}
          isSuccess={isSuccess}
          isError={isError}
        />
      </Main>
    </>
  );
}

const Main = styled.main`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  place-items: center;
  background-color: var(--grey-dark);
  min-height: 100vh;
  padding-bottom: 3rem;
  position: relative;
  z-index: 1;

  :after {
    background-color: #000000;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    opacity: 0.75;
    z-index: -1;
  }
`;
