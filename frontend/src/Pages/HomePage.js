import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import CarouselComponent from '../component/CarouselComp';
import AboutUs from '../component/About';
// import Service from '../component/Service';


const HomePage = () => {
  const links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Contact Us", link: "/contact" },
  ];

  const caption = [
    <div className="text-green-400 text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4">
      Welcome To AgroBook!
    </div>,
    <div className="text-white text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl">
      Step into the future of agriculture with Agrobook. We invite you to explore a realm of possibilities, where tradition meets innovation and expertise meets technology. Your journey to unparalleled agricultural success begins here.
    </div>
  ];
  const services = [
    {
      title: 'Service 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      // imageSrc: Image1,
    },
    {
      title: 'Service 2',
      description: 'Nullam ultricies arcu vel odio hendrerit, vel elementum neque facilisis.',
      // imageSrc: Image2,
    },
    {
      title: 'Service 3',
      description: 'Nullam ultricies arcu vel odio hendrerit, vel elementum neque facilisis.',
      // imageSrc: Image3,
    },
    // Add more services
  ];

  const[showAbout,setshowAbout]=useState(false);
  // const [showServices, setShowServices] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.querySelector('.bg-green-400');
      const servicesSection = document.querySelector('.services-section');
      if (aboutSection && window.scrollY > aboutSection.offsetTop - window.innerHeight / 2) {
        setshowAbout(true);
      }
      // if (servicesSection && window.scrollY > servicesSection.offsetTop - window.innerHeight / 2) {
      //   setShowServices(true);
      // }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  


  return (
    <>
        <Navbar links={links} />
        <div className='mt-14'>
        <CarouselComponent caption={caption}/>
        </div>
      <div>
      <AboutUs show={showAbout}/>
      </div>
      {/* <div className="services-section bg-gray-100">
        {services.map((service, index) => (
          <Service
            key={index}
            index={index}
            show={showServices}
            {...service} 
          />
        ))}
      </div>  */}

    </>

  )
}

export default HomePage
