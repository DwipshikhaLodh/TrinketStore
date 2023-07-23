import React from 'react'
import { NavLink } from 'react-router-dom';
import { AiOutlineDoubleRight } from 'react-icons/ai'
import { TbHandClick } from 'react-icons/tb'

function HomeNavigation(product) {

    const { name } = product;
    return (
        <div className='home-nav'>
        <NavLink className='home-nav-link' to='/'><TbHandClick className='click'/></NavLink>
        <AiOutlineDoubleRight/>
        <p>{name}</p>
        </div>
    )
}

export default HomeNavigation;