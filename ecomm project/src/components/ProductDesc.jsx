import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/productContext'
import HomeNavigation from './HomeNavigation';
import ProductDisplay from './ProductDisplay';

const API = "http://localhost:8000/jewelry";

function ProductDesc() {

    const { getSingleProduct, aproduct, isAProductLoading } = useContext(AppContext);

    const { id } = useParams();
    console.log(id)

    useEffect(() => {
        console.log("inside useeffect")
        getSingleProduct(`${API}/${id}`)
    }, [])

    if(isAProductLoading){
        return (
            <h3>Loading....</h3>
        )
    }

    return (
        <>
        <HomeNavigation name={aproduct.name}/>
        <ProductDisplay name={aproduct.name}/>
        </>
    )
}

export default ProductDesc;