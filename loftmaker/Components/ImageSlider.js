import React, { useEffect, useRef } from 'react';
import EmblaCarousel from 'embla-carousel';
import Image from 'next/image'



import image2 from "../public/Current-project-images/2.jpg"
import image3 from "../public/Current-project-images/3.jpg"
import image4 from "../public/Current-project-images/4.jpg"
import image5 from "../public/Current-project-images/5.jpg"
import image7 from "../public/Current-project-images/7.jpg"
import image8 from "../public/Current-project-images/8.jpg"
import image10 from "../public/Current-project-images/10.jpg"
import image12 from "../public/Current-project-images/12.jpg"
import image13 from "../public/Current-project-images/13.jpg"
import image14 from "../public/Current-project-images/14.jpg"
import image17 from "../public/Current-project-images/17.jpg"
import image19 from "../public/Current-project-images/19.jpg"
import image21 from "../public/Current-project-images/21.jpg"
import image24 from "../public/Current-project-images/24.jpg"
import image26 from "../public/Current-project-images/26.jpg"
import image27 from "../public/Current-project-images/27.jpg"
import image31 from "../public/Current-project-images/31.jpg"
import image32 from "../public/Current-project-images/32.jpg"
import image33 from "../public/Current-project-images/33.jpg"
import image34 from "../public/Current-project-images/34.jpg"
import image35 from "../public/Current-project-images/35.jpg"



export default function ImageSlider() {
  const emblaRef = useRef(null);

  useEffect(() => {
    const OPTIONS = { dragFree: true, containScroll: 'trimSnaps' };
    
    const emblaNode = emblaRef.current;
    const viewportNode = emblaNode.querySelector('.embla__viewport');
    const emblaApi = EmblaCarousel(viewportNode, OPTIONS);
    
    // You can use the emblaApi to control the carousel, like navigating slides.
    
    // Don't forget to clean up when the component unmounts.
    return () => {
      emblaApi.destroy(); // Clean up EmblaCarousel instance
    };
  }, []); // Empty dependency array ensures the effect runs only once after the component mounts

  return (
    <main className="sandbox">
      <header>
        <h1 className="sandbox__header">Current Project ├ En2 </h1>
      </header>

      <section className="sandbox__carousel">
        <div className="embla" ref={emblaRef}>
          <div className="embla__viewport">
            <div className="embla__container">
           



<div class="embla__slide">
  <Image classname="embla__slide__img"  
         src={image2} loading='lazy' blurDataURL="data:..."
         automatically provided placeholder="blur" style={{objectFit: "contain" ,height: "80vh;"}}
         alt="Loft Makers London Ltd Photos"
  />
</div>


<div class="embla__slide">
  <Image classname="embla__slide__img"
         src={image3} loading='lazy' blurDataURL="data:..."
         automatically provided placeholder="blur" style={{objectFit: "contain" ,height: "80vh;"}}
         alt="Loft Makers London Ltd Photos"
  />
</div>


<div class="embla__slide">
  <Image classname="embla__slide__img"
         src={image4} loading='lazy' blurDataURL="data:..."
         automatically provided placeholder="blur" style={{objectFit: "contain" ,height: "80vh;"}}
         alt="Loft Makers London Ltd Photos"
  />
</div>


<div class="embla__slide">
  <Image classname="embla__slide__img"
         src={image5} loading='lazy' blurDataURL="data:..."
         automatically provided placeholder="blur" style={{objectFit: "contain" ,height: "80vh;"}}
         alt="Loft Makers London Ltd Photos"
  />
</div>



<div class="embla__slide">
  <Image classname="embla__slide__img"
         src={image7} loading='lazy' blurDataURL="data:..."
         automatically provided placeholder="blur" style={{objectFit: "contain" ,height: "80vh;"}}
         alt="Loft Makers London Ltd Photos"
  />
</div>


<div class="embla__slide">
  <Image classname="embla__slide__img"
         src={image8} loading='lazy' blurDataURL="data:..."
         automatically provided placeholder="blur" style={{objectFit: "contain" ,height: "80vh;"}}
         alt="Loft Makers London Ltd Photos"
  />
</div>




<div class="embla__slide">
  <Image classname="embla__slide__img"
         src={image10} loading='lazy' blurDataURL="data:..."
         automatically provided placeholder="blur" style={{objectFit: "contain" ,height: "80vh;"}}
         alt="Loft Makers London Ltd Photos"
  />
</div>



<div class="embla__slide">
  <Image classname="embla__slide__img"
         src={image12} loading='lazy' blurDataURL="data:..."
         automatically provided placeholder="blur" style={{objectFit: "contain" ,height: "80vh;"}}
         alt="Loft Makers London Ltd Photos"
  />
</div>


<div class="embla__slide">
  <Image classname="embla__slide__img"
         src={image13} loading='lazy' blurDataURL="data:..."
         automatically provided placeholder="blur" style={{objectFit: "contain" ,height: "80vh;"}}
         alt="Loft Makers London Ltd Photos"
  />
</div>


<div class="embla__slide">
  <Image classname="embla__slide__img"
         src={image14} loading='lazy' blurDataURL="data:..."
         automatically provided placeholder="blur" style={{objectFit: "contain" ,height: "80vh;"}}
         alt="Loft Makers London Ltd Photos"
  />
</div>





<div class="embla__slide">
  <Image classname="embla__slide__img"
         src={image17} loading='lazy' blurDataURL="data:..."
         automatically provided placeholder="blur" style={{objectFit: "contain" ,height: "80vh;"}}
         alt="Loft Makers London Ltd Photos"
  />
</div>





<div class="embla__slide">
  <Image classname="embla__slide__img"
         src={image19} loading='lazy' blurDataURL="data:..."
         automatically provided placeholder="blur" style={{objectFit: "contain" ,height: "80vh;"}}
         alt="Loft Makers London Ltd Photos"
  />
</div>



<div class="embla__slide">
  <Image classname="embla__slide__img"
         src={image21} loading='lazy' blurDataURL="data:..."
         automatically provided placeholder="blur" style={{objectFit: "contain" ,height: "80vh;"}}
         alt="Loft Makers London Ltd Photos"
  />
</div>


<div class="embla__slide">
  <Image classname="embla__slide__img"
         src={image24} loading='lazy' blurDataURL="data:..."
         automatically provided placeholder="blur" style={{objectFit: "contain" ,height: "80vh;"}}
         alt="Loft Makers London Ltd Photos"
  />
</div>





<div class="embla__slide">
  <Image classname="embla__slide__img"
         src={image26} loading='lazy' blurDataURL="data:..."
         automatically provided placeholder="blur" style={{objectFit: "contain" ,height: "80vh;"}}
         alt="Loft Makers London Ltd Photos"
  />
</div>


<div class="embla__slide">
  <Image classname="embla__slide__img"
         src={image27} loading='lazy' blurDataURL="data:..."
         automatically provided placeholder="blur" style={{objectFit: "contain" ,height: "80vh;"}}
         alt="Loft Makers London Ltd Photos"
  />
</div>



<div class="embla__slide">
  <Image classname="embla__slide__img"
         src={image31} loading='lazy' blurDataURL="data:..."
         automatically provided placeholder="blur" style={{objectFit: "contain" ,height: "80vh;"}}
         alt="Loft Makers London Ltd Photos"
  />
</div>


<div class="embla__slide">
  <Image classname="embla__slide__img"
         src={image32} loading='lazy' blurDataURL="data:..."
         automatically provided placeholder="blur" style={{objectFit: "contain" ,height: "80vh;"}}
         alt="Loft Makers London Ltd Photos"
  />
</div>


<div class="embla__slide">
  <Image classname="embla__slide__img"
         src={image33} loading='lazy' blurDataURL="data:..."
         automatically provided placeholder="blur" style={{objectFit: "contain" ,height: "80vh;"}}
         alt="Loft Makers London Ltd Photos"
  />
</div>


<div class="embla__slide">
  <Image classname="embla__slide__img"
         src={image34} loading='lazy' blurDataURL="data:..."
         automatically provided placeholder="blur" style={{objectFit: "contain" ,height: "80vh;"}}
         alt="Loft Makers London Ltd Photos"
  />
</div>


<div class="embla__slide">
  <Image classname="embla__slide__img"
         src={image35} loading='lazy' blurDataURL="data:..."
         automatically provided placeholder="blur" style={{objectFit: "contain" ,height: "80vh;"}}
         alt="Loft Makers London Ltd Photos"
  />
</div>




              </div>
            </div>
          </div>
        
      </section>
    </main>
  );
}
