import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget/index';
import GitHubCorner from '../src/components/GitHubCorner/index'
import QuizBackground from '../src/components/QuizBackground/index'
import Footer from '../src/components/Footer/'

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 60%;
    @media screen and (max-width: 500px) {
    margin: auto 30%;
    padding: 15px;
  }
`;


const BackgroundImage = styled.div`
background-image:url(${db.bg});
flex:1;
background-size:cover;
background-position:center;

`;



export default function Home() {
  return (
    <BackgroundImage>
      <QuizContainer>
        <Widget>
        <Widget.Header>
          <h1>Lendas da musica Brasileira</h1>
        </Widget.Header>
          <Widget.Content>
               
       <p>testun jknlkjd kljkwjdkwjli</p>
          </Widget.Content>
      
        </Widget>
        <Widget>
        <Widget.Content>
        
       <p>testun jknlkjd kljkwjdkwjli</p>
       </Widget.Content>
        </Widget>
      </QuizContainer>
    </BackgroundImage>
  );
}