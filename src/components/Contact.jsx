import React from 'react';

import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';;
import { AiFillMail } from "react-icons/ai";
import { CONTACT } from '../constants';

const Contact = () => {
    return(
        <div className="border-b border-neutral-900 pb-20">
            <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
            <div className="text-center tracking-tighter flex items-center gap-4 lg:justify-center">
                <a className="text-decoration-none" href="https://www.instagram.com/ndilisa.thesongstress/"><FaInstagram /></a>
                <a className="text-decoration-none" href="https://www.facebook.com/profile.php?id=61564416838280"><FaFacebook /></a>
                <a className="text-decoration-none" href="https://outlook.live.com/mail/0/?ui=en-US&rs=US&auth=1"><AiFillMail /></a> 
            </div>
        </div>
    )
}

export default Contact;