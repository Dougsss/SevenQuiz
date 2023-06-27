import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import PlayGame from '../components/PlayGame/PlayGame'
import Perfil from '../components/PerfilPage/Perfil'


const RouteList = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/startQuiz" element={<PlayGame />} />
                <Route path="/userPerfil" element={<Perfil />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteList;