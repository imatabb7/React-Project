import {  createContext, useState } from "react";

const CartContext = createContext();
function CartProvider ({children}){
    let [counter, setCounter] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const removeItem = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
        setCounter(cartItems.length - 1);
      };
    
    return <CartContext.Provider value={{counter, setCounter , cartItems , setCartItems , removeItem}}>{children}</CartContext.Provider>
}

export {CartContext , CartProvider};
