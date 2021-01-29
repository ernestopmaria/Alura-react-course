/* eslint-disable react/prop-types */
import React from 'react';

import db from '../db.json';
import Widget from '../src/components/Widget/index';
import GitHubCorner from '../src/components/GitHubCorner/index';
import QuizBackground from '../src/components/QuizBackground/index';

import QuizContainer from '../src/components/QuizContainer/index';
import Button from '../src/components/Button';

function ResultWidget({ results }) {
  return (
    <Widget>
      <Widget.Header>
        <p style={{ textAlign: 'center' }}> TELA DE RESULTADO:</p>
      </Widget.Header>
      <Widget.Content>
        <p>
          Você acertou
          {' '}
          {results.reduce((somatoriaActual, resultadoAtual) => {
            const isAcerto = resultadoAtual === true;
            if (isAcerto) { return somatoriaActual + 1; }

            return somatoriaActual;
          }, 0)}
          {' '}
          perguntas

        </p>
        e
        <p>
          Você errou
          {' '}
          {results.reduce((somatoriaActual, resultadoAtual) => {
            const isAcerto = resultadoAtual === false;
            if (isAcerto) { return somatoriaActual + 1; }
            return somatoriaActual;
          }, 0)}
          {' '}
          perguntas

        </p>
        <ul>
          {results.map((result, index) => (
            <li key={`result_${result}`}>
              #
              {index + 1}
              {' '}
              Resultado:
              {result === true ? 'Acertou ' : 'Errou'}
            </li>
          ))}
        </ul>
        <Button>Reiniciar</Button>
      </Widget.Content>

    </Widget>
  );
}

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
  question, totalQuestion, questionIndex, onSubmit, addResult,
}) {
  const [isQuestionSubmited, setIsQuestionSubmited] = React.useState();
  const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;
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
          setIsQuestionSubmited(true);
          setTimeout(() => {
            addResult(isCorrect);
            onSubmit();
            setIsQuestionSubmited(false);
            setSelectedAlternative(undefined);
          }, 2 * 500);
        }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative_${alternativeIndex}`;
            return (
              <Widget.Topic as="label" key={alternativeId} htmlFor={alternativeId}>
                <input
                  id={alternativeId}
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                  type="radio"
                  name={questionId}
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          <Button type="submit" disabled={!hasAlternativeSelected}>Confirmar</Button>
          {isQuestionSubmited && isCorrect && <p style={{ backgroundColor: 'green', padding: '12px', borderRadius: '6% ' }}>Você acertou!</p>}
          {isQuestionSubmited && !isCorrect && <p style={{ backgroundColor: 'red', padding: '12px', borderRadius: '6% ' }}>Você errou!</p>}
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
  const [results, setResults] = React.useState([false]);
  const totalQuestion = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  function addResult(result) {
    setResults([
      ...results,
      result]);
  }
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
          addResult={addResult}
        />
        ) }
        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && <ResultWidget results={results} />}

        <GitHubCorner projectUrl="https://github.com/ernestopmaria/Alura-react-course " />
      </QuizContainer>

    </QuizBackground>
  );
}
