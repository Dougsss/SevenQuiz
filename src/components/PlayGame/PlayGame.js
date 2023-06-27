import React from 'react'
import { useContext, useEffect } from 'react';
import { QuizContext } from '../../context/quiz';

import Welcome from '../Welcome/Welcome';
import Question from '../Question/Question';
import GameOver from '../GameOver/GameOver';

const PlayGame = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    //Funcao para reordenar as perguntas aleatoriamente e tem que ficar na primeiro componente quando a aplicacao comeca.
    useEffect (() => {
    dispatch({ type: "REORDER_QUESTIONS" });
    }, [])

    return (
        <div>
            {quizState.gameStage === "Start" && <Welcome />}
            {quizState.gameStage === "Playing" && <Question />}
            {quizState.gameStage === "End" && <GameOver />}
        </div>
    )
}

export default PlayGame