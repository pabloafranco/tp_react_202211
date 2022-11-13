// TODO implementar pagina de login con usuario y contraseña

// de ser posible, implementar sistema de autenticación con context

// ademas, se valora el uso de custom hooks para el manejo de formularios
import { hasSelectionSupport } from '@testing-library/user-event/dist/utils'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'


const Login = () => {

    const {user, setIsAuth, setUser} = useContext(AuthContext)
    const navigate = useNavigate()


    const [form, setForm] = useState({
        user: "",
        password: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsAuth(true)
        const {user} = form
        setUser(user)
        navigate("/")

    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setForm({
            ...form,
            [name]: value,
        })

    }

  return (
    <div>
        <form onSubmit={handleSubmit} className="form">
            <div>
            <label for="user">Usuario: </label>
            <input type="text"  name="user" onChange={handleChange}/>
            </div>
            <div>
            <label for="password">Clave: </label>
            <input type="text" name="password" onChange={handleChange}/>
            </div>
            <div>
            <button type="submit" >Iniciar Sesion</button>
            </div>
        </form>
    </div>
  )
}

export default Login