
import Image from 'next/image'
import React from 'react';
import Logo from "../public/3.png"
import Link from 'next/link'

import MenuComponent from '../Components/MenuComponents';

export default function Menu({  }) {
    return(
        <main>
            <div className="Show-portrait">
                <div className="menu">
                    <div className='height'>
                    <ul>
                        <li>
                        <Link className="menuItem" href="/">Home</Link>
                        </li>
                        <li>
                            <Link className="menuItem" href="/gallery">Gallery</Link>
                        </li>
                        <li>
                        <Link className="menuItem" href="/#form_container">Contact</Link>
                        </li>
                    </ul>
                    </div>
                    
                    <footer>
                        <div className="Footer-Flex">
                        <div className="column-Footer-Flex">
                            <Link className="callLogo" href="tel:+"> T: +447469434317</Link>
                            <Link className="mailLogo" href="mailto:info@lml.ltd"> E: info@lml.ltd</Link>
                        </div>
                        <Link className="BottomLogo" href="/index.html">
                        <Image loading='lazy' src={Logo} blurDataURL="data:..." automatically provided placeholder="blur" width={100} alt="finished loft exterior" />
                        </Link>
                        <Link class="instaLogo" href="https://www.instagram.com/loftmakerlondon/">
                        <Image loading='lazy' src="/instagram.png" width={50} height={50} blurDataURL="data:..." placeholder="blur" alt="Instagram Logo" />
                        </Link>
                        </div>
                    </footer>
                    <MenuComponent />
                    </div>
                    
            <button class="hamburger">
            <i class="menuIcon material-symbols-sharp"> <li></li> <li></li> <li></li> </i>
            <i class="material-symbols-sharp closeIcon "><li></li> <li></li> <li></li> </i>
            </button>
        </div>


        </main>

)}
