import React from 'react';
import { useContext } from 'react';
import { QuizContext } from '../../context/quiz';
import Capa from '../../img/jesusCapa.png';



const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);


  return (
    <div className=" px-5 py-[20%] md:py-[8%] sm:py-20 sm:p-20 justify-items-center items-center flex flex-col">
        <div className=" flex flex-col justify-self-center text-center m-2 mb-6">
          <h2 className="font-extrabold text-[36px] sm:text-5xl md:text-[80px]">
            Desafio da Semana!
          </h2>
          <p className=" mt-1 sm:mt-4 italic text-sm sm:text-base md:text-base">
            {/* Periodo da licao vigente */} Teste seus conhecimentos!
          </p>
          <img src={Capa} alt="Capa do Mes" className="m-4 sm:w-[22%] w-[80%] self-center"/>
          <button
            className=" mt-10 self-center rounded-3xl border-2 border-purple-600 hover:bg-purple-600 hover:font-bold w-[70%] sm:w-[25%] h-12 sm:h-10 text-sm sm:text-base"
            onClick={() => dispatch({type:"CHANGE_STAGE"})}>
            Começar
          </button>
        </div>  
    </div>
  )
}

export default Welcome