/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react';
import CartContext from './CartContext'


const carritoInicial =JSON.parse(localStorage.getItem("carrito")) || [];

const CartContextProvider = ({ children }) => {
    


    const [cart, setCart] = useState(carritoInicial);
    
    
    const addItem = (item, q) => {

        const id = item.id
        if (!isInCart(id)) {
            setCart([
                ...cart,
                { item, q }
            ])
        } else {
            const agregarAlCart = cart.map((cartItem) => {
                if (cartItem.item.id === id) {
                    return {
                        ...cartItem,
                        quantity: cartItem.quantity + q
                    };
                }
                return cartItem;
            });
            setCart(agregarAlCart);
        }
    }

    

                        
const isInCart = (id) => {
    return cart.some(cartItem => cartItem.item.id === id)
};
                        
const removeItem = (id) => {
    const agregarAlCart = cart.filter((cartItem) => cartItem.item.id !== id);
    setCart(agregarAlCart)
    };

    const clear = () => {
        setCart([]);
    }


    const precioTotal = ()=>{
        return cart.reduce((total, el) => total + (el.item.price * el.q), 0)
    }
       
    useEffect(()=>{
        localStorage.setItem("carrito", JSON.stringify(cart))
    },[cart])


    const values = {
        cart,
        addItem,
        removeItem,
        clear,
        precioTotal,
        isInCart
    }




    return (
        <CartContext.Provider value={values}>
            { children }
        </CartContext.Provider>

    )
}

export default CartContextProvider