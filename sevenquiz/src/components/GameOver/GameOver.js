import React from 'react';
import { useContext } from 'react';
import { QuizContext } from '../../context/quiz';

import WellDone from "../../img/well-done.png";

const GameOver = () => {
  return (
    <div className="flex flex-col justify-self-center text-center m-2 my-10">
        <h2 className="font-extrabold text-2xl sm:text-5xl md:text-[50px]">
            Fim do Desafio
        </h2>
        <p className=" mt-10">Pontuacao: x</p>
        <p className=" mt-5">Voce acertou x de y perguntas.</p>
        <div className=" mt-10 justify-items-center items-center flex flex-col">
            <img src={WellDone} alt="Fim do Quiz" className=" w-1/3 m-5 mx-10 " />
        </div>
        <button className="mt-10 self-center rounded-3xl border-b-2 border-purple-600 hover:font-bold w-1/4 sm:h-10 text-xs sm:text-base">
            Voltar ao Inicio
        </button>
    </div>
  );
};

export default GameOver;