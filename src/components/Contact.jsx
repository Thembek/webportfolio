import React from 'react';

import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaVoicemail } from 'react-icons/fa';
import { CONTACT } from '../constants';

const Contact = () => {
    return(
        <div className="border-b border-neutral-900 pb-20">
            <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
            <div className="text-center tracking-tighter flex flex-wrap lg:justify-center">
                <div className-="w-full lg:w-1/4">
                    <div className="my-4">
                        <FaInstagram />
                        <FaFacebook />
                        <FaWhatsapp />
                        <FaVoicemail />
                    </div>
                </div>
                <div className="w-full max-w-xl lg:w-3/4">
                    <p className="my-1"><a className="text-decoration-none" href="https://www.instagram.com/ndilisa.thesongstress/">ndilisa.thesongstress</a></p>
                    <p className="my-1"><a className="text-decoration-none" href="https://www.facebook.com/profile.php?id=61564416838280">ndilisa the songstress</a></p>
                    <p className="my-1">(+27)-076 638 8256</p>
                    <a className="text-decoration-none" href="bookings4ndilisa@outlook.com">bookings4ndilisa@outlook.com</a> 
                </div>
                
            </div>
        </div>
    )
}

export default Contact;