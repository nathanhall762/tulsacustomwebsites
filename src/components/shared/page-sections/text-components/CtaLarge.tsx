import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import { useState, useEffect } from 'react';

interface Props {
  content: {
    title: string;
    subHeading: string;
    phone: string;
    address: string;
    email: string;
    names: string;
    socials: { link: string; type: string }[];
  };
}

const ContactPage: React.FC<Props> = ({ content }) => {
  const [dotColor, setDotColor] = useState<string>('text-secondary-6');

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
      <div className='w-[100%] rounded-3xl bg-border-gradient p-2'>
        <div className='rounded-2xl bg-neutral-9 px-12 py-16'>
          <h1 className='bg-border-gradient bg-clip-text pb-4 text-transparent'>
            {content.title}
          </h1>
          <p className='h1-sub pb-32 text-white-2'>{content.subHeading}</p>
          <div className='flex flex-col items-center justify-center'>
            <a
              href={`mailto:${content.email}`}
              className='h2-sub text-wrap break-words pb-6 text-primary-6'
            >
              {content.email}
            </a>
            <Icon
              className={`pb-6 text-3xl ${dotColor} transition-colors duration-md`}
              icon='oui:dot'
            />
            <p className='h3-sub text-neutral-1'>Nathan & Ethan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
