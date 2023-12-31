import React, { useContext } from 'react';
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems =()=> {
    const { all_product, cartItem, removeFromCart } = useContext(ShopContext);
    console.log(cartItem,"all_products")
    return (
        <div className='CartItems'>
            <div className="cartItems-formate-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
        

            {all_product.map((e) => {
                if (cartItem[e.id] > 0) {
                    return (
                        <div>
                            <div className='cartItems-formate'>
                                <img className='cart-icon-product-icon' src={e.image} alt='' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartItems-quantity'>{cartItem[e.id]}</button>
                                <p>{e.new_price*cartItem[e.id]}</p>
                                <img src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt='' />
                            </div>
                            <hr />
                        </div>
                    )
                }
            })}

        </div>
    )
}

export default CartItems