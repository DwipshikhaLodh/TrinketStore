import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineArrowDown } from 'react-icons/ai'
import { AppContext } from '../context/productContext';


function IntroSection() {

    const data = useContext(AppContext)
    console.log(data)
    return (
        <div className='intro-container'>
            <div className='intro-text-container'>
                <h1>Trinket Store </h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus architecto atque perferendis officiis amet! Officia reiciendis quas atque totam accusantium.</p>
                <NavLink className='intro-view-button' to='/products'>view <AiOutlineArrowDown className='arrow'/></NavLink>
            </div>
            <div className='intro-photo-container'>
                <img src='images/intro-image.png' alt='intro-image' width="450px"></img>
            </div>
        </div>
    )
}

export default IntroSection;