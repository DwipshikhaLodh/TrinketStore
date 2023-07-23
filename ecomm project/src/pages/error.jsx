import React from 'react'
import { NavLink } from 'react-router-dom';

function Error() {
    return (
        <div className='error-alert'>
            <h1>404</h1>
            <p>You got lost!! Please enter a valid url</p>
            <p>or</p>
            <p className='home-link-container'>Go to <NavLink className='home-link-inError' to='/'>Home</NavLink></p>
        </div>
    )
}

export default Error;