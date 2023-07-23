import React , {useState} from 'react'
import { FiShoppingBag } from 'react-icons/fi'
import { CgClose } from 'react-icons/cg'
import { RxHamburgerMenu } from 'react-icons/rx'
import { NavLink } from 'react-router-dom';

function Navbar() {

    const [openMenu, setopenMenu] = useState(false);
    console.log(openMenu)
    return (
        <div className={ openMenu ? "navbar-container active" : "navbar-container"}>
            
            <ul className='nav-link-bg-pink'>
                    <li><NavLink to="/" className='nav-link'>Home</NavLink></li>
                    <li><NavLink to="/about" className='nav-link'>About</NavLink></li>
                    <li><NavLink to="/products" className='nav-link'>Products</NavLink></li>
                    <li><NavLink to="/contact" className='nav-link'>Contact</NavLink></li>
                    <li><NavLink to="/cart" className='nav-link cart-link'>
                        <FiShoppingBag className='cart'/>   
                        <div className='cart-value'>10</div> 
                    </NavLink></li>
            </ul>
                
            

            <div className='open-close-btn'>
                <CgClose className='close-menu' onClick={() => console.log("will be opened")}/>
                <RxHamburgerMenu className='open-menu' onClick={() => setopenMenu(false)}/>
            </div>
        </div>
    )
}

export default Navbar;