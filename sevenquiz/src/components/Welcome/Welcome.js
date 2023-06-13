import React from 'react';
import Login from '../../img/login.png';

const Welcome = () => {
  return (
    <div className=" p-20 justify-items-center items-center flex flex-col bg-black">
        <h2>Seja bem-vindo!</h2>
        <p>Clique no botao abaixo para comecar:</p>
        <button>Iniciar</button>   
        <img src={Login} alt="Login page"/>
    </div>
  )
}

export default Welcome