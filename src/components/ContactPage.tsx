import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import { useState, useEffect } from 'react';

interface Props {
  title: string;
  subHeading: string;
  phone: string;
  address: string;
  email: string;
  names: string;
  socials: { link: string; type: string }[];
}

const ContactPage: React.FC<Props> = ({
  subHeading,
  title,
  address,
  email,
  names,
  phone,
  socials,
}) => {
  const [dotColor, setDotColor] = useState<string>('secondary-lt2');

  useEffect(() => {
    const colors = [
      'secondary-md1',
      'primary-dk2',
      'primary-lt2',
      'secondary-lt2',
    ];
    let colorIndex = 0;

    const changeColor = () => {
      colorIndex = (colorIndex + 1) % colors.length;
      setDotColor(colors[colorIndex]);
    };

    const intervalId = setInterval(changeColor, 2000); // Change color every 2 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className='flex h-screen w-screen items-center justify-center px-4 pb-[20vh] text-center text-neutral-1 dark:text-neutral-9'>
      <div className='w-full max-w-7xl bg-neutral-9 px-4 py-16'>
        <h1 className='bg-gradient-to-r from-secondary-dk2 to-secondary-lt2 bg-clip-text pb-4 text-4xl text-secondary-md3 text-transparent lg:text-8xl'>
          {title}
        </h1>
        <h2 className='pb-16 font-body text-xl lg:text-2xl'>{subHeading}</h2>
        <div className='flex flex-col items-center justify-center'>
          <a
            href={`mailto:${email}`}
            className='text-wrap break-words pb-2 text-primary-lt2 lg:text-xl'
          >
            {email}
          </a>
          <Icon
            className={`pb-2 text-3xl text-${dotColor} transition-colors duration-md`}
            icon='oui:dot'
          />
          <p className='text-neutral-1'>Nathan & Ethan.</p>
        </div>
      </div>
      {/* <div className='grid h-48 grid-cols-2 grid-rows-2 pb-16  lg:text-xl'>
        <div className='flex size-full items-center justify-center border-b border-r border-neutral-300'>
          <p className='p-4'>{email}</p>
        </div>
        <div className='flex size-full items-center justify-center border-b border-neutral-300'>
          <p className='p-4'>{names}</p>
        </div>
        <div className='flex size-full items-center justify-center border-r border-neutral-300'>
          <p className='p-4'>{phone}</p>
        </div>
        <div className='flex size-full items-center justify-center border-neutral-300'>
          <p className='p-4'>{address}</p>
        </div>
      </div>
      <nav className='mb-8 flex justify-center gap-4 lg:justify-end lg:gap-8'>
        {socials.map((social) => (
          <a className='text-lg' href={`/${social.link}`} key={social.type}>
            <i
              className={`fa-brands fa-${social.type} text-2xl hover:scale-110 hover:text-tertiary lg:text-4xl`}
            ></i>
          </a>
        ))}
      </nav> */}
    </div>
  );
};

export default ContactPage;
