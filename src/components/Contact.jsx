import React from 'react';

import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';;
import { AiFillMail } from "react-icons/ai";
import { SiLinkedin } from "react-icons/si";
import { AiFillTikTok } from "react-icons/ai";
import { SiWhatsapp } from "react-icons/si";
import { CONTACT } from '../constants';

const Contact = () => {
    return(
        <div className="border-b border-neutral-900 pb-20">
            <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
            <div className="text-center tracking-tighter flex items-center gap-4 lg:justify-center">
                <a className="text-decoration-none" href="https://www.instagram.com/ndilisa.thesongstress/"><FaInstagram /></a>
                <a className="text-decoration-none" href="https://www.facebook.com/profile.php?id=61564416838280"><FaFacebook /></a>
                <a className="text-decoration-none" href="https://outlook.live.com/mail/0/?ui=en-US&rs=US&auth=1"><AiFillMail /></a> 
                <a className="text-decoration-none" href="https://www.linkedin.com/in/ndilisa-goba-886037327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><SiLinkedin /></a>
                <a className="text-decoration-none" href="https://www.tiktok.com/@ndilisa.goba?_t=8pTNl1gDZwL&_r=1"><AiFillTikTok /></a>
                <a className="text-decoration-none" href="https://wa.me/message/XPHOZRTZVFEFL1"><SiWhatsapp /></a>   
            </div>
        </div>
    )
}

export default Contact;