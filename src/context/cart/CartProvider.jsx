import React, { useContext, useState } from "react";
import Shop from "../../pages/shop/Shop";
import { CartContext } from "./CartContext";

//TODO terminar la implementacion del contexto
  
const CartProvider = ({ children }) => {
  // esto se puede extraer en un custom hook si se desea
  const [cart, setCart] = useState([]);

  // funcion para agregar item al carrito (no es necesario agregar nada)
  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      const newCart = cart.map((cartItem) => {
        if (cartItem.item.id === item.id) {
          return { item, quantity: cartItem.quantity + quantity };
        } else {
          return cartItem;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, { item, quantity }]);
    }
    console.log('Cart:',cart)
  };

  // funcion para eliminar item del carrito (falta un detalle por agregar)
  const removeItem = (itemId) => {
    const newCart = cart.filter((cartItem) => cartItem.item.id !== itemId);
    /*PAF Modifico el estado*/ 
    setCart(newCart);
  };

  // funcion para vaciar el carrito (funcion sin implementar)
  const clear = () => {
    /* PAF: Vacioo el carrito*/
    setCart([])
  };

  // funcion para verificar si un item ya esta en el carrito (no es necesario agregar nada)
  const isInCart = (itemId) => {
    return cart.some((cartItem) => cartItem.item.id === itemId);
  };

  // faltan detalles por agregar
  /*PAF*/
      return ( 
        <CartContext.Provider value={{ addItem, removeItem, clear, cart  }}>
          {children}
        </CartContext.Provider>);
};

export const useCart = () => {
  const { addItem, removeItem, clear } = useContext(CartContext);
  return { addItem, removeItem, clear };
};

export default CartProvider;
