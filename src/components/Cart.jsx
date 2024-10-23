import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeFromCart } from '../redux/product.slice';

const Cart = () => {
    const cartData = useSelector((state) => state.ecomm.ekart);
    const dispatch = useDispatch();

    const removeFromCarthandler = (itemId) => {
        // console.log(itemId)
        dispatch(removeFromCart(itemId));
    }

    const clearCarthandler = () => {
        dispatch(clearCart());
    }

    console.log(cartData);
    return (
        <>
            <div className="card-actions">
                <button className="btn btn-primary" onClick={() => clearCarthandler()}>Remove</button>
            </div>
            <div className='flex flex-wrap justify-between px-10 py-4 gap-10'>

                {
                    cartData.length === 0 ? (<h1 className='text-2xl'>Cart empty :</h1>) : (
                        cartData.map((item, index) => (
                            <div className="card card-compact bg-base-100 w-96 shadow-xl" key={index}>
                                <figure>
                                    <img
                                        src={item.thumbnail}
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <div className='flex justify-between'>
                                        <h2 className="card-title">{item.title}</h2>
                                        <h2 className="card-title">₹ {item.price}</h2>

                                    </div>
                                    <p>{item.description}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary" onClick={() => removeFromCarthandler(item.id)}>Remove</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )
                }

            </div>
        </>
    )
}

export default Cart