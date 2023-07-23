import React, { useContext } from 'react'
import { AppContext } from '../context/productContext';

function ProductDisplay(){
    
    
    return (
        <div className='product-card'>
            <div className='product-img-card'>
                <div className='product-img-vert-card'>
                    
                </div>
                <div className='product-main-img'>
                    <img alt='product-image'></img>
                </div>
            </div>

            <div className='product-details-card'>
                <p>{}</p>
            </div>
        </div>
    )
}

export default ProductDisplay;