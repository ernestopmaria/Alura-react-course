import styled from 'styled-components'
import db from '../db.json';

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

const Widget =styled.div`
margin-top:24px;
margin-bottom:24px;
border:1px solid #4caf50;
background-color:#1c1814;
border-radius:4px;
overflow:hidden;

h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`

 

export default function Home() {
  return (
    <BackgroundImage>
      <QuizContainer>
        <Widget>
       <h1>Lendas da musica Brasileira</h1>
       <p>testun jknlkjd kljkwjdkwjli</p>
        </Widget>
        <Widget>
        <h1> BEST SONGS EVER</h1>
       <p>testun jknlkjd kljkwjdkwjli</p>
        </Widget>
      </QuizContainer>
    </BackgroundImage>
  );
}