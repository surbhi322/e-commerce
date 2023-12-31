import React, { createContext, useState } from "react";
import all_Product from '../Components/Assets/all_product';


export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < all_Product.length+1; i++) {
        cart[i] = 0;
    }
    return cart;
}
const ShopContextProvider = (props) => {
    const [cartItem, setCartItem] = useState(getDefaultCart());
    
    const addToCart = (itemId) =>{
        setCartItem((prev)=>({...prev,[itemId]: prev[itemId] + 1}))
        console.log(cartItem)
    }
    
    const removeFromCart = (itemId) =>{
        setCartItem((prev)=>({...prev,[itemId]: prev[itemId] - 1}))
    }
    
    const contextValue = { all_Product , cartItem, addToCart, removeFromCart};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;