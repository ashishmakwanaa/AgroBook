import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Agro1 from '../images/AgroCarousel1.jpg';
import Agro2 from '../images/AgroCarousel2.jpg';
import Agro3 from '../images/AgroCarousel3.jpg';
import Agro4 from '../images/AgroCarousel4.jpeg';

const CarouselComponent = ({ caption }) => {
  return (
    <Carousel autoPlay transitionTime={1000} infiniteLoop  showThumbs={false}>
      <div className='h-1/2'>
        <img src={Agro1} alt="" className='w-full h-[600px] opacity-100 ' />
        <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 transition duration-300 opacity-0 hover:opacity-100">
          <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold p-4 md:p-6 lg:p-8 xl:p-10 2xl:p-12">
            {caption}
          </div>
        </div>

      </div>
      <div className='h-1/2'>
        <img src={Agro2} alt="" className='w-full h-[600px] opacity-100' />
        <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 transition duration-300 opacity-0 hover:opacity-100">
          <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold p-4 md:p-6 lg:p-8 xl:p-10 2xl:p-12">
            {caption}
          </div>
        </div>

      </div>
      <div className='h-1/2'>
        <img src={Agro3} alt="" className='w-full h-[600px] opacity-100' />
        <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 transition duration-300 opacity-0 hover:opacity-100">
          <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold p-4 md:p-6 lg:p-8 xl:p-10 2xl:p-12">
            {caption}
          </div>
        </div>

      </div>
      <div className='h-1/2'>
        <img src={Agro4} alt="" className='w-full h-[600px] opacity-100' />
        <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 transition duration-300 opacity-0 hover:opacity-100">
          <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold p-4 md:p-6 lg:p-8 xl:p-10 2xl:p-12">
            {caption}
          </div>
        </div>

      </div>

    </Carousel>
  );
};

export default CarouselComponent;
