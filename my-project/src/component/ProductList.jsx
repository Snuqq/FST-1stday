import React from 'react'
import {products} from "./products"

const ProductList = () => {
  return (
    <div  className="flex flex-wrap justify-evenly gap-5">
        {products.map((product) => (
            <div className="shadow-lg ">
                <img src={product.image} alt="" />
                <div className="flex flex-wrap justify-start p-4 font-bold text-2xl">
                    <p>{product.name}</p> 
                    </div>
                <div className="flex flex-wrap justify-between p-4 text-1xl"> 
                    <p className="font-medium">{product.brand}</p>
                    <p>{product.price}</p>
                </div>
            </div>
  ))}
    </div>
  );
};
export default ProductList