import React from 'react';
import { useContext } from 'react';
import { QuizContext } from '../../context/quiz';

import WellDone from "../../img/well-done.png";

const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <div className="flex flex-col justify-self-center text-center m-2 my-20">
            <h2 className="font-extrabold text-4xl sm:text-5xl md:text-[50px] lg:text-[60px] -mb-4 z-10">
                Fim do Desafio
            </h2>
            <div className="rounded-2xl pt-8 mx-5 sm:mx-[25%] md:mx-[20%] lg:mx-[25%] z-0"> {/* bg-slate-900 */}
                <p className=" mt-10 font-semibold text-2xl">Pontuacao: {quizState.score}</p>
                <p className=" mt-5 font-extralight">Voce acertou {quizState.score} de {quizState.questions.length}{" "} perguntas.</p>
                <div className=" my-5 justify-items-center items-center flex flex-col">
                    <img src={WellDone} alt="Fim do Quiz" className=" w-2/4 m-5 mx-10 " />
                </div>
            </div>
            <button 
                className=" z-10 mt-2 sm:-mt-5 self-center rounded-3xl border-b-2 bg-purple-500 hover:bg-purple-600 border-black hover:font-bold w-3/4 sm:w-1/4 h-8 sm:h-10 text-xs sm:text-lg md:text-lg"
                onClick={() => dispatch({ type: "NEW_GAME" })}>
                Voltar ao Inicio
            </button>
        </div>
    );
};

export default GameOver;