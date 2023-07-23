import React, { useEffect, useReducer } from 'react'
import { createContext } from "react";
import axios from 'axios';
import reducer from '../reducer/ProductReducer'

const AppContext = createContext();

const API = "http://localhost:8000/jewelry";

const initialState= {
    isLoading : false,
    isError : false,
    products : [],
    featuredProducts : [],
    isAProductLoading : false,
    aproduct : {}
}

const ConProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const getProducts = async (url) => {
        dispatch({type : "LOADING"})
        try{
            const result = await axios.get(url);
            dispatch({type : "ADD", payload : {
                data : result.data
            }})
        }catch(e){
            console.log(e)
            dispatch({ type : "ERROR"})
        }
    }

    const getSingleProduct = async (url) => {
        dispatch({type: "A_PRODUCT_LOADING"})
        try{
            console.log(url)

            await fetch(url).then(response => response.json().then(data => {
                console.log(data)
                dispatch({type : "ADD_A_PRODUCT", payload : {
                    data : data
                }})
            }))

        }catch(e){
            console.log(e)
            dispatch({ type : "A_PRODUCT_ERROR"})
        }
    }

    useEffect(() => {
        getProducts(API);
    }, [])

    return <AppContext.Provider value={{ ...state , getSingleProduct}}>{ children }</AppContext.Provider>
}

export  { ConProvider, AppContext };