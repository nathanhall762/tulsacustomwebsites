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
  const [dotColor, setDotColor] = useState<string>('text-secondary-lt2');

  useEffect(() => {
    const colors = [
      'text-secondary-6',
      'text-secondary-3',
      'text-primary-2',
      'text-primary-7',
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
    <div className='flex h-screen items-center justify-center px-2 text-center'>
      <div className='rounded-3xl w-[100%] bg-border-gradient py-2'>
        <div className='rounded-3xl bg-neutral-9 px-12 py-16'>
          <h1 className='bg-border-gradient bg-clip-text pb-4 text-transparent'>
            {title}
          </h1>
          <p className='h1-sub pb-16 text-white-2'>{subHeading}</p>
          <div className='flex flex-col items-center justify-center'>
            <a
              href={`mailto:${email}`}
              className='h2-sub text-wrap break-words pb-2 text-primary-6'
            >
              {email}
            </a>
            <Icon
              className={`pb-2 text-3xl ${dotColor} transition-colors duration-md`}
              icon='oui:dot'
            />
            <p className='h3-sub text-neutral-1'>Nathan & Ethan.</p>
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
    </div>
  );
};

export default ContactPage;
