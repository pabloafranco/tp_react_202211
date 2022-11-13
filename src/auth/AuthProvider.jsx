// crear provider, es neceario crear el contexto previamente
// estado de autenticacion sugerido
/* 
    {
        isAuth: false,
        user: null,
    }
*/
import React, { useState } from 'react'
import { AuthContext } from './AuthContext';

export const AuthProvider = ({children}) => {

    const [isAuth, setIsAuth] = useState(false)
    const [user, setUser] = useState("")

    return (
      <AuthContext.Provider
        value={{
          isAuth,
          setIsAuth,
          user,
          setUser,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };
  
  export default AuthProvider;
  