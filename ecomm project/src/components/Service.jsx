import React from 'react'
import { FaShippingFast } from 'react-icons/fa'
import { GiReceiveMoney } from 'react-icons/gi'
import { RiSecurePaymentFill } from 'react-icons/ri'
import { BsCashCoin } from 'react-icons/bs'

function Service() {
    return (
        <div className="service-container">
            <div className='service1'>
                <FaShippingFast className='service-icon'/>
                <p className='service-text'>Fast & Free Delivery</p>
            </div>
            <div className='mid-service'>
                <div className='service2'>
                    <GiReceiveMoney className='service-icon'/>
                    <p className='service-text'>Money-back Guaranteed</p>
                </div>
                <div><h3>Services</h3></div>
                <div className='service3'>
                    <BsCashCoin className='service-icon'/>
                    <p className='service-text'>Cash on Delivery is also available</p>
                </div>
            </div>
            <div className='service4'>
                <RiSecurePaymentFill className='service-icon'/>
                <p className='service-text'>Secure Payment System</p>
            </div>
        </div>
    )
}

export default Service;