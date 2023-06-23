import './App.css';
import { useContext, useEffect } from 'react';
import { QuizContext } from './context/quiz';
import Welcome from './components/Welcome/Welcome';
import Question from './components/Question/Question';
import GameOver from './components/GameOver/GameOver';
import Footer from './components/Footer/Footer';


function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  //Funcao para reordenar as perguntas aleatoriamente e tem que ficar na primeiro componente quando a aplicacao comeca.
  useEffect (() => {
    dispatch({ type: "REORDER_QUESTIONS" });
  }, [])

  return (
      <div className="">
        {quizState.gameStage === "Start" && <Welcome />}
        {quizState.gameStage === "Playing" && <Question />}
        {quizState.gameStage === "End" && <GameOver />}
        {/* <Footer /> */}
      </div>
  );
}

export default App;
