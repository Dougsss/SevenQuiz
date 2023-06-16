import React from 'react';
import { useContext } from 'react';
import { QuizContext } from '../../context/quiz';
import Login from '../../img/login.png';


const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);


  return (
    <div className=" p-20 justify-items-center items-center flex flex-col">
        <div className=" flex flex-col justify-self-center gap-4 text-center m-2">
          <h2 className="font-extrabold text-2xl sm:text-5xl md:text-[80px]">Seja bem-vindo!</h2>
          <p className=" italic text-[10px] sm:text-xs md:text-base">Clique no botao abaixo para comecar:</p>
          <button
            className=" self-center rounded-3xl border-2 border-purple-600 hover:bg-purple-600 w-1/4 sm:h-10 text-xs sm:text-base"
            onClick={() => dispatch({type:"CHANGE_STATE"})}>
            Iniciar
          </button>
        </div>  
        <img src={Login} alt="Login page" className=" w-2/5"/>
    </div>
  )
}

export default Welcome