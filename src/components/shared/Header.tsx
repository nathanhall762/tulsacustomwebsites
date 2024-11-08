import { useState, useEffect } from 'react';
import { Icon } from '@iconify-icon/react';
import { initAnalytics } from '../../firebase';
import Button from './ui/Button';

interface Nav {
  link: string;
  name: string;
}

interface HeaderProps {
  logo: string;
  navs: Nav[];
}

const Header: React.FC<HeaderProps> = ({ logo, navs }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = 'hidden';
    } else document.body.style.overflow = 'scroll';
    return () => {};
  }, [isNavOpen]);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className=''>
      <div className={`top-0 z-50 h-[9vh] bg-primary-lt2`}></div>
      <div
        className={`fixed top-0 z-50 h-[9vh] w-full bg-neutral-9 transition-all duration-fast ease-in-out`}
      >
        <div
          className={`relative top-0 flex h-[9vh] justify-between text-center align-middle shadow-2xl transition-all duration-fast lg:grid lg:grid-cols-12`}
        >
          {/* desktop nav */}
          <div className='relative flex items-center justify-center px-6 border-neutral-6 lg:col-span-2'>
            <a href='/'>
              <div className='hover:text-accent overflow-clip text-center text-neutral-1 transition-all duration-fast dark:text-neutral-1'>
                <img src={logo} alt='logo' className='h-[8vh] py-2' />
              </div>
            </a>
          </div>
          <nav className='hidden items-center justify-end gap-[1.8vw] border-neutral-6  px-16 align-middle lg:col-span-8  lg:flex xl:col-span-8'>
            {navs.map((nav) => (
              <div key={nav.name} className='group relative'>
                <a
                  className='text-bold nav-links text-neutral-1 transition duration-fast ease-in-out hover:text-primary-md2 dark:text-neutral-1'
                  href={`${nav.link}`}
                >
                  {nav.name}
                </a>
              </div>
            ))}
          </nav>
          <div
            onClick={toggleNav}
            className={`z-50 flex w-20 cursor-pointer items-center justify-center text-neutral-1 transition-transform duration-fast lg:hidden dark:text-neutral-1 ${isNavOpen ? 'rotate-180 opacity-100' : 'rotate-0 opacity-100'}`}
          >
            {isNavOpen ? (
              <Icon icon='mdi:close' className='text-5xl' />
            ) : (
              <Icon icon='mdi:menu' className='text-5xl' />
            )}
          </div>
          {/* mobile nav */}
          <div
            className={`absolute left-0 top-full z-50 h-fit w-full transform overflow-y-auto overflow-x-hidden py-4 pt-0 shadow-md transition-transform duration-fast lg:hidden ${isNavOpen ? 'scale-y-100' : 'scale-y-0'} min-h-[90vh] origin-top transition-transform duration-fast ease-in-out`}
          >
            <nav
              className={`z-20 flex h-fit min-h-[90vh] translate-x-[0] flex-col bg-neutral-9 px-8 mb-64 pt-4 duration-md ease-in-out dark:bg-neutral-9`}
            >
              <div className='mb-12'>
                {navs.map((nav) => (
                  <div className='flex px-6 py-4' key={nav.name}>
                    <a
                      href={`${nav.link}`}
                      className='text-neutral-1 nav-links dark:bg-neutral-9 dark:text-neutral-1'
                    >
                      {nav.name}
                    </a>
                  </div>
                ))}
              </div>
              <a
                href='/contact'
                className='flex justify-items-center self-center'
              >
                <Button text='Hire Us!' />
              </a>
            </nav>
          </div>
          <div className='hidden px-4 lg:col-span-2 lg:flex lg:justify-around xl:col-span-2'>
            <a href='/contact' className='flex self-center'>
              <Button text='Hire Us!' size='sm' />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
