
import Image from 'next/image'

import React from 'react';
import { motion } from 'framer-motion';
import Logo from "../public/3.png"
import Link from 'next/link'


export default function Nav_Bar({  }) {
    return(
        <main> <header className="nav-bar Show-Landscape">
        <ul>
          <li>
            <a className="menuItem-navbar" href="/">Home</a>
          </li>
          <motion.div whileHover={{scale: 1.01,
              transition: { duration: 1 },}}>
            <li>
              <Link className="menuItem-navbar" href="/gallery">Gallery</Link>
            </li>
          </motion.div>
          <li>
            <a className="menuItem-navbar" href="/index.html#form-container">Contact </a>
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
      </header> </main>
    )
   
    
}