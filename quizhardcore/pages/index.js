/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget/index';
import GitHubCorner from '../src/components/GitHubCorner/index';
import QuizBackground from '../src/components/QuizBackground/index';
import Footer from '../src/components/Footer';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
    @media screen and (max-width: 500px) {
    margin: auto 0%;
    padding: 15px;
  }
`;

/* const BackgroundImage = styled.div`
background-image:url(${db.bg});
flex:1;
background-size:cover;
background-position:center;

`; */

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
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
            <h1>Lendas da musica Brasileira</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={(event) => {
              event.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('teste');
            }}
            >
              <Input
                onChange={(infoDoEvento) => {
                  // name = infoDoEvento.target.value;
                  setName(infoDoEvento.target.value);
                }}
                placeholder="Insira seu nome"
              />
              <Button type="submit" disabled={name.length === 0}>
                Jogar
                {name}
              </Button>
            </form>
          </Widget.Content>

        </Widget>
        <Widget>
          <Widget.Content>

            <p>testun jknlkjd kljkwjdkwjli</p>
          </Widget.Content>
        </Widget>
        <Footer />
        <GitHubCorner projectUrl="https://github.com/ernestopmaria/Alura-react-course " />
      </QuizContainer>

    </QuizBackground>
  );
}
