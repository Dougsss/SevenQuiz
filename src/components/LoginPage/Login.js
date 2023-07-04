import React from 'react';
import { Link } from 'react-router-dom';
import Password from "../../img/password.png";

const Login = () => {
  return (
      <div className=" w-[94%] sm:w-[80%] sm:h-[500px] 2xl:h-[70%] mx-[3%] sm:mx-[10%] my-[3%] sm:my-[15%] 2xl:my-[7%] self-center flex flex-col sm:flex-row ">
        <div className=" w-full sm:w-[60%] h-full rounded-t-3xl sm:rounded-tr-none sm:rounded-l-3xl bg-slate-300 p-2 sm:py-[20%] md:py-2">
          <img src={Password} alt="passwordImg" className=" py-[13%] xl:py-0"/>
        </div>
        <div className="w-full sm:w-[40%] bg-slate-100 text-center py-[15%] sm:py-[20%] md:py-[10%] 2xl:py-[8%] p-2 rounded-b-3xl sm:rounded-bl-none sm:rounded-r-3xl">
          <p className="mb-6 text-slate-700 font-medium text-xl">Login your account</p>
          <li className="flex flex-col gap-5 items-center">
            <form className=" px-8 sm:px-1 md:px-8 pt-4 pb-8 ">
              <div className="mb-6">
                <input className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
                <p className="text-red-500 text-xs italic">Please choose a password.</p>
              </div>
              <div className="flex flex-col items-center gap-5">
                <Link to={"/startQuiz"}/* Rota em startQuiz setado apenas provisoriamente */
                  className="bg-gradient-to-l from-violet-500 to-fuchsia-500 hover:bg-gradient-to-r from-fuchsia-500 to-violet-500 rounded-3xl w-[80%] h-12 sm:h-10 p-2">
                    Sing-in
                </Link>
                <Link to={"/newUser"} className="inline-block align-baseline font-bold text-sm text-violet-500 hover:text-violet-700" href="#">
                  Forgot Password?
                </Link>
              </div>
            </form>
          </li>
        </div>
      </div>
  )
}

export default Login