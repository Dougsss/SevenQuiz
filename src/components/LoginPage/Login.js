import React from 'react';
import { Link } from 'react-router-dom';
import Password from "../../img/password.png";

const Login = () => {
  return (
      <div className=" w-[80%] h-[500px] mx-[10%] my-[15%] self-center flex flex-row">
        <div className="w-[60%] h-full rounded-l-3xl bg-slate-300 p-2">
          <img src={Password} alt="passwordImg" className=" py-[13%]"/>
        </div>
        <div className="w-[40%] h-full bg-slate-100 text-center py-[15%] p-2 rounded-r-3xl">
          <p className="mb-10 text-slate-700 font-medium text-xl">Login your account</p>
          <li className="flex flex-col gap-5 items-center">
            <Link to={"/startQuiz"}
              className="bg-gradient-to-l from-violet-500 to-fuchsia-500 hover:bg-gradient-to-r from-fuchsia-500 to-violet-500 rounded-3xl w-[80%] h-12 sm:h-10 p-2">
                Sing-in
              </Link>
            <Link to={"/newUser"}
              className="bg-gradient-to-l from-violet-500 to-fuchsia-500 hover:bg-gradient-to-r from-fuchsia-500 to-violet-500 rounded-3xl w-[80%] h-12 sm:h-10 p-2">
                Create New
            </Link>
              {/* <button className="bg-gradient-to-l from-violet-500 to-fuchsia-500 hover:bg-gradient-to-r from-fuchsia-500 to-violet-500 rounded-3xl w-[80%] h-12 sm:h-10">
                Sing-in
              </button>
              <button className="bg-gradient-to-l from-violet-500 to-fuchsia-500 hover:bg-gradient-to-r from-fuchsia-500 to-violet-500 rounded-3xl w-[80%] h-12 sm:h-10">
                Create New
              </button>  */}
          </li>
        </div>
      </div>
  )
}

export default Login