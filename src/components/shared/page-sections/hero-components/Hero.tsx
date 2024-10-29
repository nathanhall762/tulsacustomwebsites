import { useState, useEffect } from 'react';
import Button from '../../ui/Button';

interface HeroProps {
  heading: string;
  subheading: string;
  images: string[];
  call_to_action_text?: string;
  call_to_action_link?: string;
}

const Hero: React.FC<HeroProps> = ({
  heading,
  subheading,
  images,
  call_to_action_text,
  call_to_action_link,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length, 5000]);

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
    <div
      className='relative h-[100vh] w-full bg-neutral-8 bg-cover shadow-inner xl:h-[100vh]'
      style={{ backgroundImage: `url(${backgroundTexture})` }}
    >
      {images.map((image, index) => (
        <div
          key={image}
          className={getImageClasses(index)}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <img
        className='absolute top-[2vh] z-10 hidden h-full scale-50 bg-cover bg-no-repeat transition-all duration-slow ease-in-out xl:visible xl:right-[24vw] xl:inline'
        src={phoneImage}
      ></img>
      {/* <div className='absolute inset-0 h-full w-full bg-black opacity-30'></div> */}
      <div className='relative top-32 z-10 flex h-full flex-col lg:text-left xl:top-0 xl:justify-center'>
        <div className='px-4 py-16 lg:px-32'>
          <h1 className='text-shadow-outline pb-2 text-neutral-1 drop-shadow-xl lg:text-neutral-1'>
            Tulsa{' '}
            <em className='bg-gradient-to-r from-secondary-dk2 to-secondary-lt1 bg-clip-text pr-2 text-transparent'>
              Custom
            </em>{' '}
            Websites
          </h1>
          <h3 className='text-shadow-outline pb-24 text-xl font-light tracking-wide text-neutral-2 lg:pb-24 lg:text-left lg:text-4xl'>
            {subheading}
          </h3>
          <div className='items-left flex flex-col justify-start gap-4 lg:flex-row lg:gap-16 lg:pb-24'>
            <a href='/contact' className=''>
              <Button text={call_to_action_text ?? ''} />
            </a>
            {/* <p className='text-base text-neutral-2 lg:text-lg'>
              <a href='tel:9189407800'>Call: (918) 940-7800</a>
            </p> */}
          </div>
        </div>
      </div>
      <div className='absolute inset-0 z-0 flex flex-col justify-end'>
        <div className='relative'>
          <div className='bg-black absolute inset-0 z-0 bg-opacity-0 backdrop-blur-[2px] lg:backdrop-blur-sm'></div>
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
