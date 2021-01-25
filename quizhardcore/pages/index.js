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
  return (
    <QuizBackground backgroundImage={db.bg}>
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
        <Footer/>
        <GitHubCorner projectUrl="https://github.com/ernestopmaria/Alura-react-course "/>
      </QuizContainer>
      
    </QuizBackground>
  );
}