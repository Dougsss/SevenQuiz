import React from 'react';
import { useContext } from 'react';
import { QuizContext } from '../../context/quiz';
import Login from '../../img/login.png';
import Button from '../Button/Button';

const Welcome = () => {
  const quizState = useContext(QuizContext);

  console.log(quizState);

  return (
    <div className=" p-20 justify-items-center items-center flex flex-col">
        <div className=" flex flex-col justify-self-center gap-4 text-center m-2">
          <h2 className="font-extrabold text-2xl sm:text-5xl md:text-[80px]">Seja bem-vindo!</h2>
          <p className=" italic text-[10px] sm:text-xs md:text-base">Clique no botao abaixo para comecar:</p>
          <Button />
        </div>  
        <img src={Login} alt="Login page" className=" w-2/5"/>
    </div>
  )
}

export default Welcome