import React from 'react';
import { NavLink } from 'react-router-dom';


function Product(product) {

    const { name, image, _id } = product;
    return (
        <div className={`item${_id}`}>
            <NavLink className='feature-link' to={`/aproduct/${_id}`} >
                <figure className='feature-product-info'>
                    <img src={image[0]} alt="product photo" width='100%' height="300px"></img>
                    <figcaption>{name}</figcaption>
                </figure>
            </NavLink>
        </div>
    )
}

export default Product;