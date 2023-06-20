import './App.css';
import { useContext } from 'react';
import { QuizContext } from './context/quiz';
import Welcome from './components/Welcome/Welcome';
import Question from './components/Question/Question';


function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
      <div className="">
        {quizState.gameStage === "Start" && <Welcome />}
        {quizState.gameStage === "Playing" && <Question />}
      </div>
  );
}

export default App;
