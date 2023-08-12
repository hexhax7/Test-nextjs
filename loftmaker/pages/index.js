import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react';
import MenuComponent from '../Components/MenuComponents';
import MainImage from '../public/65.jpg'
import Logo from "../public/3.png"
import InstaLogo from "../public/instagram-logo.jpg"
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import globals from "@/pages/_app"


const inter = Inter({ subsets: ['latin'] })

export default function Home({ mainHeaderText}) {
  return (
    <>
      <Head>
        <title>Loft Maker London Ltd</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </Head>
      <main>


      <header className="nav-bar">
        <ul>
          <li>
            <a className="menuItem-navbar" href="/">Home</a>
          </li>
          <li>
            <a className="menuItem-navbar" href="/gallery.html">Gallery</a>
          </li>
          <li>
            <a className="menuItem-navbar" href="/index.html#form-container">Contact </a>
          </li>
          <li>
          <Image 
          className='logo'
              loading='lazy'
                src= {Logo}
                blurDataURL="data:..." automatically provided
                placeholder="blur"
                
                height={90}
              
                alt="Loft Maker London Ltd Logo"
              />
          </li>
          <li>
            <div className="column-Footer-Flex-2" >
              <a className="header1email" href="tel:+447469434317">T:+447469434317</a>
              <a className="header1num" href="mailto:info@lml.ltd">E:info@lml.ltd</a>
            </div>
          </li>
          
        </ul>
    </header>
        <div>
          <h1 className={styles.mainheader}> {mainHeaderText}</h1>
          <Image 
          loading='lazy'
            src= {MainImage}
            blurDataURL="data:..." automatically provided
            placeholder="blur"
           width={2000}
           
            alt="finished loft exterior"
          />
        </div>
        <div className="Show-portrait" >
        <div className="menu">
        
          <ul>
            <li>
              <Link className="menuItem" href="/index.html">Home</Link>
            </li>
            <li>
              <Link className="menuItem" href="/gallery.html">Gallery </Link>
            </li>
            <li>
              <Link className="menuItem" href="/index.html#form-container">Contact </Link>
            </li>
          </ul>

          <footer>
            <p >Copyright © 2023 lml.com All Rights Reserved.</p>
            <div className="Footer-Flex">
              <div className="Coloumn-Footer-Flex">
                <Link className="callLogo" href="tel:+"> +447469434317</Link>
                <Link className="mailLogo" href="mailto:info@lml.ltd"> info@lml.ltd</Link>
              </div>
              <Link className="BottomLogo" href="/index.html">
              <Image 
            loading='lazy'
              src= {MainImage}
              blurDataURL="data:..." automatically provided
              placeholder="blur"
            width={2000}
            
              alt="finished loft exterior"
            />
              </Link>
              <Link class="instaLogo" href="https://www.instagram.com/loftmakerlondon/">
              <Image 
            loading='lazy'
              src= {MainImage}
              blurDataURL="data:..." automatically provided
              placeholder="blur"
            width={2000}
            
              alt="finished loft exterior"
            />
              </Link>
            </div>
          </footer>
          <MenuComponent />
      </div>
  
          <button class="hamburger">
            
            <i class="menuIcon material-symbols-sharp" >menu</i>
            <i class="material-symbols-sharp closeIcon ">close</i>
          </button>
          <script src="/js/Hamburger-Menu.js"></script>
          
    </div>
        
        <div className={styles.intro}>
          <h1>Loft Maker London Ltd</h1>
          <br/>
          <br/>
          <p>Loftmaker London offers personalized and tailored solutions for every home, recognizing its unique characteristics. With our dedicated on-site builders and effective project management, we ensure a smooth and hassle-free experience for our clients. Our extensions and loft conversions not only meet building standards but also prioritize sustainability while providing creative and cost-effective solutions.</p>
          <p>By enhancing your home's value without the need to move, our expert extensions will exceed your expectations and completely transform your space. Discover the untapped potential of your home today by requesting a free quote. Embark on a journey towards a functional, stylish, and valuable living space.</p>
      
        </div>
        <br/>
        <div className="Contact">
          <ul>
            <li> 
             < Link href="/pages/Gallery"> Contact</Link> us today
            </li>
            <li>
              07756777527
            </li>
            <li>
              info@lml.ltd
            </li>
          </ul>
        </div>

        <div className="flex_container">
        <div className="Content">
          <h1> Our Services</h1>
          <p>From start to finish, we ensure that your loft conversion meets your desired requirements. With a focus on exceptional service and a high-quality finish, we take pride in our workmanship.
          <br/>We offer a range of loft conversion options to suit any lifestyle and budget, recognizing that every home is unique. Whether you're looking for a simple conversion or a more complex project, 
          our skilled team can bring your ideas to life.
          
          <br/> 
          Our commitment to quality and customization guarantees a loft conversion or extension that is truly personalized for you. Contact us 
          today to schedule an intial consultation and discover how Loft Makers can transform your home.</p> <br/>

          <div className={styles.serviceList}>
            <h1>Things we do : </h1>
            <ul>
            <li className={styles.first_list}>Planning Permission</li>
            <li>Building Control</li>
            <li>Scaffolding</li>
            <li>Steel Installation</li>
            <li>Structural Work including moving walls,ceilings,new roof, flat roofs, stair installation</li>
            <li>Window, door, and velux installation</li>
            <li>Full electrics with Certification</li>
            <li>Full Plumbing with Certification</li>
            <li>Demolition including chimney removal</li>
            <li>Skip permits</li>
            <li>Concreting</li>
            <li>Bathrooms</li>
            <li>Kitchens</li>
            <li>Lighting</li>
            <li>Landscape Gardening</li>
            <li>and more</li>
            </ul>
          </div>
          <div className={styles.flex_container_image}>
         
          </div>
          </div>
          <Image
          loading='lazy'
            src="/DoorKnob.jpg"
            width={928}
            height={1160}
            blurDataURL="data:..." 
            placeholder="blur"
            alt="finished loft exterior"
          
          style={{
            width: 'auto ',
            height: '75vh',
          }}
          />
          </div>
          <div className="flex_container">
          <div className="Content">
              <div>
                <Image
                loading='lazy'
                src="/En2AL/Bathroom-1.jpg"
                width={928}
                height={1160}
                blurDataURL="data:..." 
                placeholder="blur"
                alt="finished loft exterior"
              
                style={{
                  width: 'auto ',
                  height: '75vh',
                }} />
            </div>
          </div>
          <div className={styles.About_Content}> <h1> About </h1>
          <br/>
          <br/>
            <p> With over 20 years of expeiance transforming homes in london , Our team is committed to delivering exceptional renovations and extensions, 
              fueled by our deep knowledge and expertise. We are driven by a passion for design, constantly seeking out innovative solutions to create unique spaces. <br/> 
              <br/>  At Loftmaker London, we understand the challenges that can arise during a renovation project. However, we are well-prepared to overcome any obstacles 
              that may come our way. Our goal is to ensure that your project stays within budget and is completed on schedule. We work closely with architects, building control, 
              structural engineers, and planning departments, or can operate independently, to ensure that our results align perfectly with your vision. <br/> 
              <br/>  With Loftmaker London, you can trust that your home renovation will be handled with utmost professionalism and attention to detail.
            </p></div>
            
          </div>
          
          <div className="Content-2">
              <h1> Lofts </h1>
              <p>At Loft Maker, loft conversions are not just a service we provide; they are our unwavering passion and the cornerstone of our expertise. With over two decades of experience in the industry, we have firmly established ourselves as the go-to experts for transforming unused attics into stunning and highly functional living spaces. <br/> 
                <br/>  Throughout the years, our talented and dedicated team has triumphed over a diverse array of challenges. Whether it's navigating limited space, executing intricate structural modifications, or securing complex planning permissions, we boast an unparalleled depth of know-how and ingenuity that empowers us to overcome any obstacle with remarkable ease. <br/> 
                <br/>  What truly sets us apart is our unyielding commitment to delivering outstanding results, executed with absolute precision and an unwavering attention to detail. We understand that a loft conversion is more than just about adding extra space to your home; it's a chance to create an extraordinary and inviting living area that perfectly complements your lifestyle while substantially enhancing your property's value. <br/> 
                <br/>  When it comes to execution, we take immense pride in our team of skilled craftsmen who work tirelessly to breathe life into every design. Employing only the highest quality materials and industry-leading techniques, we ensure that each aspect of the conversion is carried out to the most exacting standards possible. <br/> 
                <br/> 
              </p>
            </div>
          

          
            <div class="Content-2">
              <h1 >Extensions</h1>
              <p>If you're seeking to add more space to your home without the inconvenience and expense of moving, Loftmaker has the perfect solution. Our custom extensions offer the opportunity to reimagine your living space. Whether you desire additional bedrooms, bathrooms, walk-in wardrobes, or expanded kitchen and dining areas, our extensions cater to your lifestyle. <br/>
                <br/> Our professional builders excel at creating extensions that seamlessly blend with your homes existing structure, maintaining a consistent and cohesive look. Whether your style leans towards modern and sleek or traditional and timeless , our extensions are tailored to complement your homes architecture and enhance its beauty. <br/>
                <br/> Loftmaker London takes pride in our experienced team of builders who specialize in designing and constructing bespoke extensions that meet your unique needs and specifications. We are committed to creating additional space, adding value to homes, and crafting beautiful living areas that surpass our clients expectations. Our strong reputation is built on client satisfaction, with the majority of our work resulting from word-of-mouth referrals. <br/>
                <br/> Whether you're considering a loft conversion, side extension, or a complete home refurbishment, Loft Makers is equipped to handle all building services, from steel installation and groundworks to electrics and plumbing. Experience a stress-free transformation of your living space with Loft Makers London.
              </p>
            </div>
          


          <footer>
      
          <div className="Footer-Flex">
            <div className="column-Footer-Flex">
              <Link className="callLogo" href="tel:+"> +447469434317</Link>
              <Link href="mailto:info@lml.ltd"> info@lml.ltd</Link>
            </div>
            <Link className="BottomLogo" href="/index.html">
            <Image
                    loading='lazy'
                    src={Logo}
                    width={100}
                    height={100}
                    blurDataURL="data:..." 
                    placeholder="blur"
                    alt="finished loft exterior"
                  
                    />
            </Link>
            <Link  href="https://www.instagram.com/loftmakerlondon/">
            <Image
                    loading='lazy'
                    src={InstaLogo}
                    width={50}
                    height={50}
                    blurDataURL="data:..." 
                    placeholder="blur"
                    alt="Instagram Logo"
                  
                    />
            </Link>
          </div>
        </footer>
      
      </main>
    </>
  )
}
export async function getServerSideProps() {
  const mainHeaderText = 'Loft Maker London Ltd'; // Fetch this from an API or database
  const imageSrc = '/DoorKnob.jpg'; // Fetch the image URL from an API or database

  return { props: { mainHeaderText, imageSrc } };
}
