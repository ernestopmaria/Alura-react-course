/* eslint-disable react/prop-types */
import React from 'react';
import db from '../db.json';
import Widget from '../src/components/Widget/index';
import GitHubCorner from '../src/components/GitHubCorner/index';
import QuizBackground from '../src/components/QuizBackground/index';

import QuizContainer from '../src/components/QuizContainer/index';
import Button from '../src/components/Button';

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content>
        [Desafio do Loading]
      </Widget.Content>
    </Widget>
  );
}

function QuizQuetions({
  question, totalQuestion, questionIndex, onSubmit,
}) {
  const questionId = `question_${questionIndex}`;
  return (
    <Widget>
      <Widget.Header>

        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestion}
        `}
        </h3>
      </Widget.Header>
      <img
        alt="Descrição "
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />

      <Widget.Content>
        <h1>{question.title}</h1>
        <p>{question.description}</p>

        <form onSubmit={(infosDoEvento) => {
          infosDoEvento.preventDefault();
          onSubmit();
        }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative_${alternativeIndex}`;
            return (
              <Widget.Topic as="label" key={alternativeId} htmlFor={alternativeId}>
                <input id={alternativeId} type="radio" name={questionId} />
                {alternative}
              </Widget.Topic>
            );
          })}

          <Button type="submit">Confirmar</Button>
          <p>Você acertou!</p>
          <p>Você errou!</p>
        </form>
      </Widget.Content>

    </Widget>
  );
}
const screenStates = {
  LOADING: 'LOADING',
  QUIZ: 'QUIZ',
  RESULT: 'RESULT',
};

export default function QuizPage() {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const totalQuestion = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];
  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 500);
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestion) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (

    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        {/*  <QuizLogo /> */}
        { screenState === screenStates.QUIZ && (
        <QuizQuetions
          question={question}
          questionIndex={questionIndex}
          totalQuestion={totalQuestion}
          onSubmit={handleSubmitQuiz}
        />
        ) }
        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && <div>Você acertou X questões, parabéns</div>}

        <GitHubCorner projectUrl="https://github.com/ernestopmaria/Alura-react-course " />
      </QuizContainer>

    </QuizBackground>
  );
}
