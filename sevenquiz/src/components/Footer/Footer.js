import React from 'react';


const Footer = () => {
    return (
        <div className="mt-auto">
            <hr className="h-5 border-t-2 border-slate-600 mt-4 mx-10" />
            <div className=" flex justify-center mb-4 ">
                <img src="https://as1.ftcdn.net/v2/jpg/03/07/11/82/1000_F_307118205_Lq1s1jyDw5Rw5RZwx0Ai4G1XVN8J29oE.jpg" alt="logo" 
                    className=" h-10 justify-items-center"/>
            </div>
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-100">© <a href="https://www.linkedin.com/in/doug-araujo/" className="hover:underline">Doug Araujo™</a>. All Rights Reserved.</span>
        </div>
    )
}

export default Footer