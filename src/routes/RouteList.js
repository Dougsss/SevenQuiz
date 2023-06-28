import React from 'react'
import { BrowserRouter, Route, Routes, Switch} from 'react-router-dom'
import PlayGame from '../components/PlayGame/PlayGame'
import Perfil from '../components/PerfilPage/Perfil'
import FormUser from '../components/Form/FormUser'
import Login from '../components/LoginPage/Login'


const RouteList = () => {
    return (
        <>
            <Login />
                <Routes>
                    
                    <Route path="/startQuiz" element={<PlayGame />} />
                    <Route path="/newUser" element={<FormUser />} />
                    <Route path="/userPerfil" element={<Perfil />} />
                </Routes>
        </>
    )
}

export default RouteList;