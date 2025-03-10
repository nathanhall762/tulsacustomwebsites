import { useState, useEffect } from 'react';
import Button from '../../ui/Button';
import Rainbow from '../../ui/Rainbow';

interface HeroProps {
  heading: string;
  subheading: string;
  images?: string[];
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
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentImageIndex((prevIndex) =>
  //       prevIndex === content.images.length - 1 ? 0 : prevIndex + 1
  //     );
  //   }, 5000);

  //   return () => clearInterval(timer);
  // }, [content.images.length, 5000]);

  const getImageClasses = (index: number) => {
    let baseClasses =
      'absolute w-1/2 h-1/2 bg-cover right-0 top-[5vh] xl:top-[9vh] z-10 transition-all duration-slow ease-in-out';
    if (index === currentImageIndex) {
      return `${baseClasses} transform opacity-100`;
    } else {
      return `${baseClasses} transform opacity-0`;
    }
  };

  const phoneImage = '/MobileWithCustomWebsite.webp';
  const backgroundTexture = '/parabolic-ellipse.webp';

  return (
    <div className='relative h-[100vh] w-[99vw] self-center overflow-visible bg-fade-down bg-cover shadow-inner'>
      <div
        className='absolute left-0 top-0 -z-10 h-full w-full bg-cover bg-center'
        style={{
          backgroundImage: `url(${backgroundTexture})`,
        }}
      ></div>
      {/* {content.images.map((image, index) => (
        <div
          key={image}
          className={getImageClasses(index)}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))} */}
      <img
        className='absolute top-[2vh] z-10 hidden h-full scale-50 bg-cover bg-no-repeat brightness-200 transition-all duration-slow ease-in-out xl:visible xl:right-[24vw] xl:inline'
        src={phoneImage}
      ></img>
      {/* <div className='absolute inset-0 h-full w-full bg-black opacity-30'></div> */}
      <div className='relative top-32 z-10 flex h-full flex-col lg:text-left xl:top-0 xl:justify-center'>
        <div className='px-4 lg:w-1/2 lg:py-16 lg:pl-32'>
          <h1 className='text-shadow-outline pb-2 text-[5rem] text-neutral-1 drop-shadow-xl lg:text-neutral-1'>
            Tulsa{' '}
            <em className='bg-border-gradient bg-clip-text pr-3 text-transparent'>
              Custom
            </em>{' '}
            Websites
          </h1>
          <p className='h1-sub text-shadow-outline pb-24 text-[2rem] tracking-wide text-neutral-2 lg:pb-24 lg:text-left'>
            {subheading}
          </p>
          <div className='lg:items-left flex flex-col items-center justify-center gap-4 lg:flex-row lg:justify-start lg:gap-16 lg:pb-24'>
            <a href='#contact' className=''>
              <Button text={call_to_action_text ?? ''} url='#contact' />
            </a>
            {/* <p className='text-base text-neutral-2 lg:text-lg'>
              <a href='tel:9189407800'>Call: (918) 940-7800</a>
            </p> */}
          </div>
        </div>
      </div>
      <Rainbow />
    </div>
  );
};

export default Hero;
