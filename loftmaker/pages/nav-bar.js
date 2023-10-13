
import Image from 'next/image'

import React from 'react';

import Logo from "../public/3.png"
import Link from 'next/link'


export default function Nav_Bar({  }) {
    return(
        <main> <header className="nav-bar Show-Landscape">
          <div className='nav-bar-block'>
        <ul>
          <li>
            <Link className="menuItem-navbar" href="/">Home</Link>
          </li>
          <li>
            <Link className="menuItem-navbar" href="/gallery">Gallery</Link>
          </li>

          <li>
            <Image className='logo' loading='lazy' src={Logo} blurDataURL="data:..." automatically provided placeholder="blur" height={90} alt="Loft Maker London Ltd Logo" />
          </li>
          <li>
            <div className="column-Footer-Flex-2">
              <a className="header1email" href="tel:+447469434317">T:+447469434317</a>
              <a className="header1num" href="mailto:info@lml.ltd">E:info@lml.ltd</a>
            </div>
          </li>
        </ul>
        </div>
      </header> </main>
    )
   
    
}