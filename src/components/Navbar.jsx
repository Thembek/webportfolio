import React from 'react';

import {FaFacebook} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';

const Navbar = () => {
    return(
        <nav className=" mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0">
          
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          {/*
          <a href="https://www.instagram.com/ndilisa.thesongstress/"><FaInstagram /></a>
          <a href="https://www.facebook.com/profile.php?id=61564416838280"><FaFacebook /></a>
          */}
        </div>
      </nav>
    )
}

export default Navbar;