import React from 'react';
import Login from '../../img/login.jpg';

const Welcome = () => {
  return (
    <div className="p-5 pt-20 justify-items-center items-center flex flex-col">
        <h2>Seja bem-vindo!</h2>
        <p>Clique no botao abaixo para comecar:</p>
        <button>Iniciar</button>   
        <img src={Login} alt="Login page"/>
    </div>
  )
}

export default Welcome