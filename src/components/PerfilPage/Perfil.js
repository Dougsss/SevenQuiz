import React from 'react';
import { useNavigate } from "react-router-dom";
import useAuth from '../../hooks/useAuth';

const Perfil = () => {

  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-5">
      <div className=" container w-full h-10 flex flex-row">
        <ul>
          <li>Seus Dados</li>
          <li>Configuracao</li>
          <li>Ajuda</li>
        </ul>
        {/* <button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </button> */}
      </div>
      <div className="m-2 p-2 h-[50%} w-[30%] bg-gray-900 cursor-pointer text-center" onClick={() => [signout(), navigate("/")]}>
        <h1>I want out of my perfil!</h1>
      </div>
    </div>
  )
}

export default Perfil