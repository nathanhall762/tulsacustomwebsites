import React from 'react';
import { Icon } from '@iconify-icon/react';

interface SuperHeaderProps {
  phone: string;
  address: string;
  email: string;
  addressLink: string;
  isScrolled: boolean;
}

const SuperHeader: React.FC<SuperHeaderProps> = ({ phone, address, email, addressLink, isScrolled }) => {
  const formatPhoneNumber = (phone: string) => {
    const cleaned = ('' + phone).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return phone;
  };

  return (
    <div
      className={`flex overflow-hidden border-neutral-6 text-xs transition-all duration-fast lg:flex-row-reverse ${isScrolled ? 'h-0 border-b-0' : 'h-[6vh] border-b-[1px]'}`}
    >
      <div className='flex flex-grow items-center justify-center border-r-[1px] border-neutral-6'>
        <a
          className='group flex items-center justify-center gap-2 lg:gap-4'
          href={`mailto:${email}}`}
          target='_blank'
        >
          <Icon
            icon='mdi:email'
            className='text-xl text-primary-md1 transition-all duration-fast group-hover:text-primary-md2'
          />
          <span className='hidden text-center text-xs text-neutral-1 transition-all duration-fast group-hover:scale-md group-hover:underline lg:inline dark:text-neutral-1'>
            {email}
          </span>
        </a>
      </div>
      <div className='flex flex-grow items-center justify-center border-r-[1px] border-neutral-6'>
        <a
          className='group flex items-center justify-center gap-2 lg:gap-4'
          href={addressLink}
          target='_blank'
        >
          <Icon
            icon='mdi:map-marker'
            className='text-xl text-primary-md1 transition-all duration-fast group-hover:text-primary-md2'
          />
          <span className='hidden text-center text-xs text-neutral-1 transition-all duration-fast group-hover:scale-md group-hover:underline lg:inline dark:text-neutral-1'>
            {address}
          </span>
        </a>
      </div>
      <div className='flex flex-grow items-center justify-center border-neutral-6 lg:border-r-[1px]'>
        <a
          className='group flex items-center justify-center gap-2 lg:gap-4'
          href={`tel:${phone}`}
        >
          <Icon
            icon='mdi:phone'
            className='text-xl text-primary-md1 transition-all duration-fast group-hover:text-primary-md2'
          />
          <span className=' text-neutral-1 transition-all duration-fast group-hover:scale-md group-hover:underline dark:text-neutral-1'>
            {formatPhoneNumber(phone)}
          </span>
        </a>
      </div>
    </div>
  );
};

export default SuperHeader;
