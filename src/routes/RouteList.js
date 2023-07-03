import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import PlayGame from '../components/PlayGame/PlayGame'
import Perfil from '../components/PerfilPage/Perfil'
import FormUser from '../components/Form/FormUser'
import Login from '../components/LoginPage/Login'


const Private = ({ Item }) => {
    const signed = false;

    return signed > 0 ? <Item /> : <Login />;
};


const RouteList = () => {
    return (
        <>
            <Login />
                <Routes>
                    <Route exact path="/userPerfil" element={ <Private Item={Perfil} />} />
                    <Route path="/startQuiz" element={<PlayGame />} />
                    <Route path="/newUser" element={<FormUser />} />
                </Routes>
        </>
    )
}

export default RouteList;