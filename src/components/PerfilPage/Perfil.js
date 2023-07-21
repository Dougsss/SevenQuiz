import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import useAuth from '../../hooks/useAuth';

const Perfil = () => {

  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <nav className="bg-gray-900">
        <div className=" flex items-center font-medium justify-around">
          <div className=" h-12 font-light first-letter:font-bold first-letter:bg-violet-900">
            Se7en Quiz
          </div>
          <ul className=" flex items-center gap-5">
            <li>Perfil</li>
            <li>Configuracao</li>
            <li className="cursor-pointer" onClick={() => [signout(), navigate("/")]}>Sair</li>
          </ul>
        </div>
        {/* <div className="m-2 p-2 h-[50%} w-[30%] bg-gray-900 cursor-pointer text-center" onClick={() => [signout(), navigate("/")]}>
          <h1>I want out of my perfil!</h1>
        </div> */}
      </nav>
    </>
  )
}

export default Perfil