import React from 'react';
import { useState } from 'react';
import 'boxicons';
import { Link, useNavigate } from "react-router-dom";
import useAuth from '../../hooks/useAuth';

const Perfil = () => {

  const { signout } = useAuth();
  const navigate = useNavigate();

  const navLinks = document.querySelector('.nav-links')
  function onToggleMenu(e) {
    e.name = e.name === 'menu' ? 'close' : 'menu'
    navLinks.classList.toggle('top-[9%]')
  };

  // funcao para selecionar o estado dos botoes de "podium" e "tabela"
  const [selectedDiv, setSelectedDiv] = useState(null);
  const handleDivClick = (divIndex) => {
    setSelectedDiv(divIndex === selectedDiv ? null : divIndex)
  };

  return (
    <>
      <nav className="bg-gray-900">
        <div className=" flex items-center font-medium justify-between px-5">
          <div className=" p-2 h-12 font-light first-letter:font-bold lett first-letter:bg-violet-900 flex flex-row">
            Se<p className=" font-extrabold text-violet-500">7</p>en Quiz
          </div>
          <div id='nav-links' className=" md:static absolute bg-gray-900 md:min-h-fit min-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
            <ul className=" flex md:flex-row flex-col md:items-center md:gap-5 gap-7">
              <li className="cursor-pointer  hover:text-violet-300">Perfil</li>
              <li className="cursor-pointer  hover:text-violet-300">Configuracao</li>
              <li className="cursor-pointer text-white  hover:text-violet-500 border-violet-500 border hover:border-white rounded-md p-1" onClick={() => [signout(), navigate("/")]}>Sair</li>
            </ul>
          </div>
          <div className="cursor-pointer md:hidden" >
          <box-icon name='menu' color='rgba(255,254,254,1)' size='md' onClick={ onToggleMenu }/>
          </div>
        </div>
      </nav>
      
      <section className="flex flex-col md:flex-row gap-2 p-2">
        <div className="bg-gray-900 opacity-70 rounded-md w-[100%] md:w-[50%] h-32 flex items-center justify-center"> Status do Player </div>
        <div className="bg-gray-900 opacity-70 rounded-md w-[100%] md:w-[50%] h-32">
          <div className=" flex flex-gow gap-1 p-2">
            <Link to={"podiumRank"} className="cursor-pointer text-center border-r border-b border-white w-[50%]" //corrigir
            onClick={() => handleDivClick(0)}
            >Podium</Link>
            <Link to={"/listRank"} className="cursor-pointer text-center border-l border-b border-white w-[50%]" //corrigir
            onClick={() => handleDivClick(1)}
            >Tabela</Link>
          </div>
          <div className="p-1"></div>
        </div>
      </section>
      <section className="px-2 w-[100%] h-auto">
        <div className="z-0 bg-gray-900 opacity-70 rounded-md p-5 flex flex-col items-center justify-center">
          <p className="z-10 font-extrabold text-white"> Let's go the next game!</p>
          <Link to={"/startQuiz"} className="z-10 cursor-pointer hover:bg-white border border-white rounded-full text-white font-semibold hover:text-gray-900 w-20 h-20 m-5 flex items-center justify-center">Start</Link>
        </div>
      </section>
    </>
  )
}

export default Perfil