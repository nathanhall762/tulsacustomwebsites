import React, { useState, useEffect } from 'react';

interface HeroProps {
  content: {
    heading: string;
    subheading: string;
    images: string[];
    call_to_action_text?: string;
    call_to_action_link?: string;
  };
}

const Hero: React.FC<HeroProps> = ({
  content: {
    heading: welcomeText,
    subheading: tagline,
    images: backgroundImages,
    call_to_action_text,
    call_to_action_link,
  },
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [backgroundImages.length, 5000]);

  const getImageClasses = (index: number) => {
    let baseClasses =
      'absolute w-1/2 h-1/2 bg-cover right-0 top-[5vh] xl:top-[9vh] z-10 transition-all duration-slow ease-in-out';
    if (index === currentImageIndex) {
      return `${baseClasses} transform opacity-100`;
    } else {
      return `${baseClasses} transform opacity-0`;
    }
  };

  const phoneImage = '/MobileWithCustomWebsite.png';
  const backgroundTexture = '/parabolic-ellipse.svg';

  return (
    <div className='relative h-[75vh] xl:h-[92vh] w-full bg-neutral-8 shadow-inner bg-cover' style={{backgroundImage: `url(${backgroundTexture})`}}>
      {backgroundImages.map((image, index) => (
        <div
          key={image}
          className={getImageClasses(index)}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <img className='absolute bg-no-repeat scale-50 h-full bg-cover hidden xl:inline xl:visible xl:right-[24vw] top-[2vh] z-10 transition-all duration-slow ease-in-out' src={phoneImage}></img>
      {/* <div className='absolute inset-0 h-full w-full bg-black opacity-30'></div> */}
      <div className='relative z-10 flex h-full top-32 xl:top-0 flex-col xl:justify-center lg:text-left'>
        <div className='px-4 py-16 lg:px-32'>
          <h1 className='text-shadow-outline pb-2 text-neutral-1 drop-shadow-xl lg:text-neutral-1'>
            Tulsa{' '}
            <em className='bg-gradient-to-r from-secondary-dk2 to-secondary-lt1 bg-clip-text pr-2 text-transparent'>
              Custom
            </em>{' '}
            Websites
          </h1>
          <h3 className='text-shadow-outline pb-24 text-xl font-light tracking-wide text-neutral-2 lg:pb-24 lg:text-left lg:text-4xl'>
            {tagline}
          </h3>
          <div className='flex lg:pb-24 flex-col items-left justify-start gap-4 lg:flex-row lg:gap-16'>
            <a href='/contact' className=''>
              <button className='bg-other transform rounded-xl bg-primary-lt1 px-12 py-4 text-lg text-neutral-2 transition duration-300 ease-in-out hover:scale-110  hover:bg-primary-lt2'>
                {call_to_action_text}
              </button>
            </a>
            {/* <p className='text-base text-neutral-2 lg:text-lg'>
              <a href='tel:9189407800'>Call: (918) 940-7800</a>
            </p> */}
          </div>
        </div>
      </div>
      <div className='absolute inset-0 z-0 flex flex-col justify-end'>
        <div className='relative'>
          <div className='absolute inset-0 bg-black backdrop-blur-[2px] z-0 lg:backdrop-blur-sm bg-opacity-0'></div>
          <div className='h-8 w-full bg-primary-dk1'></div>
          <div className='h-8 w-full bg-primary-md2'></div>
          <div className='h-8 w-full bg-primary-lt1'></div>
          <div className='h-8 w-full bg-secondary-md2'></div>
          <div className='h-8 w-full bg-secondary-lt1'></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
