import React, {useContext} from 'react'
import ProtectedRoutes from './ProtectedRoutes'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from '../pages/shop/Shop';
import Login from '../pages/login/Login';

const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="*" element={
         <ProtectedRoutes>
            <Routes>
             <Route path="/" element={<Shop />} />
           </Routes>
         </ProtectedRoutes>
         } />

        <Route path="login" element={<Login />} />
    </Routes>
  </BrowserRouter>
  )
}

export default AppRoutes


// TODO Implementar sistema de rutas

// TODO! Importar librerías necesarias
