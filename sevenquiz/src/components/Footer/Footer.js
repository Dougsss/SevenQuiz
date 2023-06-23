import React from 'react';
import { sevenLogo } from '../../img/logo1.jpg';

const Footer = () => {
    return (
        <div className="mt-auto">
            <hr className="h-5 border-t-2 border-slate-600 mt-4 mx-10" />
            <div className=" flex justify-items-center ">
                <img src={sevenLogo} alt="logo" className=" h-10 justify-items-center"/>
            </div>
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-100">© <a href="https://www.linkedin.com/in/doug-araujo/" className="hover:underline">Doug Araujo™</a>. All Rights Reserved.</span>
        </div>
    )
}

export default Footer