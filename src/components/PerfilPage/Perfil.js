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
          <div className=" md:static absolute bg-gray-900 md:min-h-fit min-[60vh] left-0 top-[5%] md:w-auto w-full flex items-center px-5">
            <ul className=" flex md:flex-row flex-col md:items-center md:gap-5 gap-7">
              <li className="cursor-pointer  hover:text-violet-300">Perfil</li>
              <li className="cursor-pointer  hover:text-violet-300">Configuracao</li>
              <li className="cursor-pointer text-white  hover:text-violet-500 border-violet-500 border hover:border-white rounded-md p-1" onClick={() => [signout(), navigate("/")]}>Sair</li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Perfil