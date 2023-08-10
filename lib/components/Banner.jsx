"use client"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { BiArrowBack } from "react-icons/bi";

import image1 from "../../public/Banner1.jpg"
import image2 from "../../public/Banner2.jpg"
import image3 from "../../public/Banner3.jpg"
import image4 from "../../public/Banner4.jpg"
import image5 from "../../public/Banner5.jpg"
import image6 from "../../public/Banner6.jpg"
import Image from "next/image";


const Banner = () => {
  return (
    <div className="relative text-white text-[20px] w-full mx-auto">
    <Carousel
        emulateTouch={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
            <div
                onClick={clickHandler}
                className="absolute right-[31px] md:right-[51px] bottom-4 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
            >
                <BiArrowBack className="text-sm md:text-lg" />
            </div>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
            <div
                onClick={clickHandler}
                className="absolute right-0 bottom-4 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
            >
                <BiArrowBack className="rotate-180 text-sm md:text-lg" />
            </div>
        )}
    >
        <div>
            <Image height={1800} width={2800}
                alt=""
                src={image2}
                className="aspect-[16/10] md:aspect-auto object-cover"
            />
           
        </div>

        <div>
            <Image height={1800} width={2800}
                alt=""
                src={image3}
                className="aspect-[16/10] md:aspect-auto object-cover"
            />
           
        </div>

        <div>
            <Image height={1800} width={2800}
                alt=""
                src={image1}
                className="aspect-[16/10] md:aspect-auto object-cover"
            />
            
        </div>
        <div>
            <Image height={1800} width={2800}
                alt=""
                src={image4}
                className="aspect-[16/10] md:aspect-auto object-cover"
            />
            
        </div>
        <div>
            <Image height={1800} width={2800}
                alt=""
                src={image5}
                className="aspect-[16/10] md:aspect-auto object-cover"
            />
            
        </div>
        <div>
            <Image height={1800} width={2800}
                alt=""
                src={image6}
                className="aspect-[16/10] md:aspect-auto object-cover"
            />
            
        </div>
    </Carousel>
</div>
  )
};

export default Banner;
