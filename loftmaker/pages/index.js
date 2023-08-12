import Head from 'next/head'
import Image from 'next/image'
import DoorKnob from '../public/DoorKnob.jpg'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'


const inter = Inter({ subsets: ['latin'] })

export default function Home({ mainHeaderText}) {
  return (
    <>
      <Head>
        <title>Loft Maker London Ltd</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <h1 className={styles.mainheader}> {mainHeaderText}</h1>
          <Image
          loading='lazy'
            src="/DoorKnob.jpg"
            width={928}
            height={1160}
            blurDataURL="data:..." automatically provided
            placeholder="blur"
            alt="finished loft exterior"
          />
        </div>
        
        <div className={styles.intro}>
          <h1>Loft Maker London Ltd</h1>
          <p>Loftmaker London offers personalized and tailored solutions for every home, recognizing its unique characteristics. With our dedicated on-site builders and effective project management, we ensure a smooth and hassle-free experience for our clients. Our extensions and loft conversions not only meet building standards but also prioritize sustainability while providing creative and cost-effective solutions.</p>
          <p>By enhancing your home's value without the need to move, our expert extensions will exceed your expectations and completely transform your space. Discover the untapped potential of your home today by requesting a free quote. Embark on a journey towards a functional, stylish, and valuable living space.</p>
      
        </div>
        <div className={styles.Contact}>
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

        <div className={styles.flex_container}>
          <div className={styles.Content}>
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
      
      </main>
    </>
  )
}
export async function getServerSideProps() {
  const mainHeaderText = 'Loft Maker London Ltd'; // Fetch this from an API or database
  const imageSrc = '/DoorKnob.jpg'; // Fetch the image URL from an API or database

  return { props: { mainHeaderText, imageSrc } };
}

