
import Head from 'next/head'
import Image from 'next/image'
import React from 'react';
import Image_slider from '@/Components/ImageSlider';
import { motion, useScroll , useTransform} from 'framer-motion';
import Link from 'next/link'
import AnimatedTextWord from "../Components/AnimatedTextWord";
import styles from '@/styles/Home.module.css'
import Nav_Bar from './nav-bar';
import Menu from './Menu'
import Footer from './Footer'
import Contactform from '@/Components/contactform';


export default function Home({ mainHeaderText}) {
  let {scrollYProgress} = useScroll();
  let y = useTransform(scrollYProgress, [0,1], ["40%", "-180%"]);

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
  
<Nav_Bar/>
<Menu/>
  
  
  
  <div className="Show-Landscape">
          <div className= {styles.mainheader} > <AnimatedTextWord text="Loft Makers London Ltd" /></div>
          <Image 
              loading='lazy'
                src= "/En2AL/Loft.jpg"
                blurDataURL="data:..." automatically provided
                placeholder="blur"
                fill={true}
                style={{objectFit: "cover"}}
                alt="Bathroom Photo"
              />
        </div>
        <div className="Show-portrait relative">
        <div className= {styles.mainheader} > <AnimatedTextWord text="Loft Makers London Ltd" /></div>
          <Image 
                loading='lazy'
                  src= "/61.jpg"
                  blurDataURL="data:..." automatically provided
                  placeholder="blur"
                  fill={true}
                  style={{objectFit: "cover"}}
                  alt="Bathroom Photo"
                />
        </div>
  
 
  <motion.div initial={{ opacity: 0 }} transition={{duration: 1.0}} whileInView={{ opacity: 1 }} className={styles.intro}>
    <br />
    <br />
    <p>Loftmaker London offers personalized and tailored solutions for every home, recognizing its unique characteristics. With our dedicated on-site builders and effective project management, we ensure a smooth and hassle-free experience for our clients. Our extensions and loft conversions not only meet building standards but also prioritize sustainability while providing creative and cost-effective solutions.</p>
    <p>By enhancing your home's value without the need to move, our expert extensions will exceed your expectations and completely transform your space. Discover the untapped potential of your home today by requesting a free quote. Embark on a journey towards a functional, stylish, and valuable living space.</p>
  </motion.div>
  <br />
  <div className="Contact">
    <ul>
      <li>
        < Link href="/pages/Gallery"> Contact </Link> us today
      </li>
      <li> 07756777527 </li>
      <li> info@lml.ltd </li>
    </ul>
  </div>

    <section className=" flex_container ">
     
        <section className="Content">
            <motion.div initial={{ opacity: 0 }} transition={{duration: 1.0}} whileInView={{ opacity: 1 }}>
              
                  <h1> Our Services</h1>
                  <p>From start to finish, we ensure that your loft conversion meets your desired requirements. With a focus on exceptional service and a high-quality finish, we take pride in our workmanship. <br />We offer a range of loft conversion options to suit any lifestyle and budget, recognizing that every home is unique. Whether you're looking for a simple conversion or a more complex project, our skilled team can bring your ideas to life. <br /> Our commitment to quality and customization guarantees a loft conversion or extension that is truly personalized for you. Contact us today to schedule an intial consultation and discover how Loft Makers can transform your home. </p>
                  <br />
                    <div className={styles.serviceList}>
                      <h1>Things we do: </h1>
                      
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
                      <li>and more!</li>
                    </ul>
                      
                      
                    </div>
                  
                
            </motion.div>
        </section>
       
        <div className='Content hidden'>
            <div className='overlapcontainer'>
              <div className='OverLapping-Images'>  <span>
                  <Image className='Content-Image ' loading='lazy' src="/En2AL/Bathroom-1736X981.jpg" width={736} height={981} blurDataURL="data:..." placeholder="blur" alt="finished loft exterior" />
                </span>
                  <motion.div style={{y}} className='hidden'>
                  <span className='Span-margin'>
                  <Image className="Show-1377 " loading='lazy' src="/En2AL/Tap981.jpg" width={596} height={795} blurDataURL="data:..." placeholder="blur" alt="Tap" style={{
                        
                        width: 'auto ',
                        height: '45vh',
                      }} />
                </span>
                  </motion.div> </div>
              </div>

        </div>
        

    </section>
      
 
 
  <section className="flex_container" >
    <section className="Content">
    
        
      
        <div className='overlapcontainer oppo-hidden'>
          <div className='OverLapping-Images'>
            <span>
              <Image className='Content-Image ' loading='lazy' src="/66.jpg" width={736} height={981} blurDataURL="data:..." placeholder="blur" alt="LoftMakerLondon" />
            </span>
              <motion.div style={{y}}>
              <span className='Span-Margin-Left hidden'>
              <Image className='Content-Image ' loading='lazy' src="/72.jpg" width={736} height={981} blurDataURL="data:..." placeholder="blur" alt="DoorKnob"style={{
                        
                        width: 'auto ',
                        height: '45vh',
                      }} />
            </span>
            </motion.div>

              
          </div>
        </div>


   </section>
    <section className="Content">
    <motion.div initial={{ opacity: 0 }} transition={{duration: 1.0}} whileInView={{ opacity: 1 }} >
      <h1> About </h1>
      
      <p> With over 20 years of expeiance transforming homes in london , Our team is committed to delivering exceptional renovations and extensions, fueled by our deep knowledge and expertise. We are driven by a passion for design, constantly seeking out innovative solutions to create unique spaces. <br />
        <br /> At Loftmaker London, we understand the challenges that can arise during a renovation project. However, we are well-prepared to overcome any obstacles that may come our way. Our goal is to ensure that your project stays within budget and is completed on schedule. We work closely with architects, building control, structural engineers, and planning departments, or can operate independently, to ensure that our results align perfectly with your vision. <br />
        <br /> With Loftmaker London, you can trust that your home renovation will be handled with utmost professionalism and attention to detail.
      </p>
    </motion.div>
    </section>


  </section>  
  
  <div className='image-slide-div'> <Image_slider/></div>

  
  <motion.div initial={{ opacity: 0 }} transition={{duration: 1.0}} whileInView={{ opacity: 1 }} className="Content-2">
    <h1> Lofts </h1>
    <p>At Loft Maker, loft conversions are not just a service we provide; they are our unwavering passion and the cornerstone of our expertise. With over two decades of experience in the industry, we have firmly established ourselves as the go-to experts for transforming unused attics into stunning and highly functional living spaces. <br />
      <br /> Throughout the years, our talented and dedicated team has triumphed over a diverse array of challenges. Whether it's navigating limited space, executing intricate structural modifications, or securing complex planning permissions, we boast an unparalleled depth of know-how and ingenuity that empowers us to overcome any obstacle with remarkable ease. <br />
      <br /> What truly sets us apart is our unyielding commitment to delivering outstanding results, executed with absolute precision and an unwavering attention to detail. We understand that a loft conversion is more than just about adding extra space to your home; it's a chance to create an extraordinary and inviting living area that perfectly complements your lifestyle while substantially enhancing your property's value. <br />
      <br /> When it comes to execution, we take immense pride in our team of skilled craftsmen who work tirelessly to breathe life into every design. Employing only the highest quality materials and industry-leading techniques, we ensure that each aspect of the conversion is carried out to the most exacting standards possible. <br />
      <br />
    </p>
  </motion.div>
  <motion.div initial={{ opacity: 0 }} transition={{duration: 1.0}} whileInView={{ opacity: 1 }} class="Content-2">
    <h1>Extensions</h1>
    <p>If you're seeking to add more space to your home without the inconvenience and expense of moving, Loftmaker has the perfect solution. Our custom extensions offer the opportunity to reimagine your living space. Whether you desire additional bedrooms, bathrooms, walk-in wardrobes, or expanded kitchen and dining areas, our extensions cater to your lifestyle. <br />
      <br /> Our professional builders excel at creating extensions that seamlessly blend with your homes existing structure, maintaining a consistent and cohesive look. Whether your style leans towards modern and sleek or traditional and timeless , our extensions are tailored to complement your homes architecture and enhance its beauty. <br />
      <br /> Loftmaker London takes pride in our experienced team of builders who specialize in designing and constructing bespoke extensions that meet your unique needs and specifications. We are committed to creating additional space, adding value to homes, and crafting beautiful living areas that surpass our clients expectations. Our strong reputation is built on client satisfaction, with the majority of our work resulting from word-of-mouth referrals. <br />
      <br /> Whether you're considering a loft conversion, side extension, or a complete home refurbishment, Loft Makers is equipped to handle all building services, from steel installation and groundworks to electrics and plumbing. Experience a stress-free transformation of your living space with Loft Makers London.
    </p>
  </motion.div>
  <div></div>
  <Contactform/>
  <Footer/>
      
      </main>
    </>
  )
}
export async function getServerSideProps() {
  const mainHeaderText = 'Loft Maker London Ltd'; // Fetch this from an API or database
  

  return { props: { mainHeaderText} };
}