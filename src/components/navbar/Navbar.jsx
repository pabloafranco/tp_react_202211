import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import styles from "./Navbar.module.css";

// TODO implementar el ruteo con la libreria correspondiente

// TODO crear un componente que muestra el nombre del usuario logueado

// TODO crear un componente que permita ver cuantos items hay en el carrito

// TODO! recordar que las librerias deben ser instaladas con npm install

const Navbar = () => {
  const {user} = useContext(AuthContext)
  console.log('user:', user)

  return (
    <div>
      Usuario: {user}
    <nav className={styles.navbar}>
      <ul>
        <li>
          <a href="#inicio">Inicio</a>
        </li>
      </ul>
      <ul>
        <li>
          {/* logout */}
          <a href="#salir">Salir</a>
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;
