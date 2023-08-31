
import Image from 'next/image'

import React from 'react';

import Logo from "../public/3.png"
import Link from 'next/link'


export default function Footer({  }) {
    return(
        <main>
            <footer>
                <div className="Footer-Flex">
                    <div className="column-Footer-Flex">
                        <Link className="callLogo" href="tel:+"> T: +447469434317</Link>
                        <Link href="mailto:info@lml.ltd"> E: info@lml.ltd</Link>
                    </div>
                <Link className="BottomLogo" href="/index.html">
                <Image loading='lazy' src={Logo} width={100} height={100} blurDataURL="data:..." placeholder="blur" alt="finished loft exterior" />
                </Link>
                <Link href="https://www.instagram.com/loftmakerlondon/">
                <Image loading='lazy' src="/instagram.png" width={50} height={50} blurDataURL="data:..." placeholder="blur" alt="Instagram Logo" />
                </Link>
                </div>
            </footer>
      </main>
    )
   
    
}