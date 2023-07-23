import React from 'react'
import { PiInstagramLogoFill } from 'react-icons/pi'
import { MdEmail } from 'react-icons/md'
import { AiOutlineTwitter } from 'react-icons/ai'

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-info-container'>
                <span>Trinket Store</span>
                <form className='footer-contact' action='https://formspree.io/f/xeqbokow' method='POST'>
                    <div className='form-firstpart'>
                        <label htmlFor='name'>
                            <input type='text' id='name' name='name' placeholder='name' required></input>
                        </label>
                        <label htmlFor='email'>
                            <input type='email' id='email' name='email' placeholder='email' required></input>
                        </label>
                    </div>
                    <label htmlFor='msg'>
                        <textarea id='msg' placeholder='type your message here...' name='message' cols='30' rows='3' required></textarea>
                    </label>
                    <button type='submit'>Send</button>
                </form>
                <div className='footer-extra-info'>
                    <p>Follow us </p>
                    <div className='footer-extra-icons'>
                        <PiInstagramLogoFill/>
                        <MdEmail/>
                        <AiOutlineTwitter/>
                    </div>
                    <p>Call us </p>
                    <p>9999999999</p>
                </div>
            </div>
            <div className='footer-img-container'>
                <img src='/images/footer-img.png' width='600px' height='100%'></img>
            </div>
        </div>
    )
}

export default Footer;