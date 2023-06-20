import React from 'react';
import { useContext } from 'react';
import { QuizContext } from '../../context/quiz';
import Capa from '../../img/capaLevitico.jpg';


const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);


  return (
    <div className=" p-20 justify-items-center items-center flex flex-col">
        <div className=" flex flex-col justify-self-center text-center m-2 mb-6">
          <h2 className="font-extrabold text-2xl sm:text-5xl md:text-[80px]">
            Desafio da Semana!
          </h2>
          <p className=" mt-4 italic text-[10px] sm:text-xs md:text-base">
            Lição dos Jovens Jul-Ago-Set
          </p>
          <button
            className=" mt-10 self-center rounded-3xl border-2 border-purple-600 hover:bg-purple-600 w-1/4 sm:h-10 text-xs sm:text-base"
            onClick={() => dispatch({type:"CHANGE_STAGE"})}>
            Iniciar
          </button>
        </div>  
        <img src={Capa} alt="Capa do Mes" className=" w-2/5 m-4"/>
    </div>
  )
}

export default Welcome