import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import PlayGame from '../components/PlayGame/PlayGame';
import Perfil from '../components/PerfilPage/Perfil';
import FormUser from '../components/Form/FormUser';
import Login from '../components/LoginPage/Login';

import useAuth from '../hooks/useAuth';


const Private = ({ Item }) => {
    const {signed} = useAuth();

    return signed > 0 ? <Item /> : <Login />;
};


const RouteList = () => {
    return (
        <>
        
            <Routes>
                <Route path="/" element={<Login />} />
                <Route exact path="/userPerfil" element={ <Private Item={Perfil} />} />
                <Route path="/startQuiz" element={<PlayGame />} />
                <Route path="/newUser" element={<FormUser />} />
                <Route path="*" element={<Login />} />
            </Routes>
        </>
    )
}

export default RouteList;