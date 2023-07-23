import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../context/productContext';
import Product from './Product';
import { NavLink } from 'react-router-dom';

function Feature() {

    const { isLoading, featuredProducts } = useContext(AppContext);

    console.log(featuredProducts)

    if(isLoading){
        return <p>Loading ...</p>
    }
    return(
        <div className='feature-parent'>
            <NavLink to="/products">
                <img className='feature-poster' src='/images/feature-poster.png' width='100%'></img>
            </NavLink>
            <p>Featuring Your Favourites...</p>
            <div className='feature-container'>
                {
                    featuredProducts.map((obj) => {
                        return <Product key={obj.id} {...obj}/>
                    })
                }
            </div>
            <span className='after'>We are not just Jewelry</span>
        </div>
    )
}

export default Feature;