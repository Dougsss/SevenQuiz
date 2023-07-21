import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import useAuth from '../../hooks/useAuth';

const Perfil = () => {

  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <nav className="bg-gray-900">
        <div className=" flex fle items-center font-medium justify-between px-5">
          <div className=" p-2 h-12 font-light first-letter:font-bold lett first-letter:bg-violet-900 flex flex-row">
            Se<p className=" font-extrabold text-violet-500">7</p>en Quiz
          </div>
          <ul className=" flex items-center gap-5">
            <li className="cursor-pointer  hover:text-violet-300">Perfil</li>
            <li className="cursor-pointer  hover:text-violet-300">Configuracao</li>
            <li className="cursor-pointer text-white  hover:text-violet-500 border-violet-500 border hover:border-white p-1" onClick={() => [signout(), navigate("/")]}>Sair</li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Perfil