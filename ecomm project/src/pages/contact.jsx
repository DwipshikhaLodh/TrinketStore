import React from 'react'
import Header from '../components/Header';

function Contact() {
    return (
        <div className=''>
            <div className='contact-container'>
                <div className='contact-img'>
                    <img src='/images/contact-image.png' alt='image' width='500px'></img>
                </div>
                <div className='contact-form-container'>
                    <form className='form' action='https://formspree.io/f/xeqbokow' method='POST'>
                        <label htmlFor='name'>
                            <input type='text' id='name' name='name' placeholder='name' required></input>
                        </label>
                        <label htmlFor='email'>
                            <input type='email' id='email' name='email' placeholder='email' required></input>
                        </label>
                        <label htmlFor='msg'>
                            <textarea id='msg' placeholder='type your message here...' name='message' cols='50' rows='8' required></textarea>
                        </label>
                        <button type='submit'>Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;