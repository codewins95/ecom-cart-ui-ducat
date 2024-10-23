import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, productThunk } from '../redux/product.slice';

const Product = () => {

  const products = useSelector((state) => state.ecomm.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productThunk());
  }, []);

  console.log(products);

  const addToCartHandler =(item)=>{
    // console.log(item)
    dispatch(addToCart(item));
  }

  return (
    <>
      <div className='flex flex-wrap justify-between px-10 py-4 gap-10'>

        {
          products.length === 0 ? (<h1>Data not found:</h1>) : (
            products.map((item, index) => (
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
                    <button className="btn btn-primary" onClick={() => addToCartHandler(item)}>Buy Now</button>
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

export default Product