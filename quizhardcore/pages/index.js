/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget/index';
import GitHubCorner from '../src/components/GitHubCorner/index';
import QuizBackground from '../src/components/QuizBackground/index';
import Footer from '../src/components/Footer';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer/index';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  // eslint-disable-next-line no-console
  console.log('retorno do useState', name, setName);

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Head>
          <title>
            Quiz Dificil
          </title>
        </Head>
        <Widget>
          <Widget.Header>
            <h1>Mostre-nos que conheces o Mapa do mundo</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={(event) => {
              event.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <Input
                onChange={(infoDoEvento) => {
                  // name = infoDoEvento.target.value;
                  setName(infoDoEvento.target.value);
                }}
                placeholder="Insira seu nome"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`JOGAR  ${name}`}

              </Button>
            </form>
          </Widget.Content>

        </Widget>
        <Widget>
          <Widget.Content>
            <h2>Acerte a capital de cada País</h2>
          </Widget.Content>
        </Widget>
        <Footer />
        <GitHubCorner projectUrl="https://github.com/ernestopmaria/Alura-react-course " />
      </QuizContainer>

    </QuizBackground>
  );
}
