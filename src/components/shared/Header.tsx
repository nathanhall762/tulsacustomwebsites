import { useState, useEffect } from 'react';
import { Icon } from '@iconify-icon/react';
import { initAnalytics } from '../../firebase';
import SuperHeader from './SuperHeader';

interface Nav {
  link: string;
  name: string;
  subpages?: {
    link: string;
    name: string;
  }[];
}

interface HeaderProps {
  phone: string;
  address: string;
  email: string;
  logo: string;
  socials: { link: string; type: string }[];
  addressLink: string;
  navs: Nav[];
}

const Header: React.FC<HeaderProps> = ({
  phone,
  address,
  email,
  socials,
  addressLink,
  logo,
  navs,
}) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [subNavOpen, setSubNavOpen] = useState<Nav | undefined>();

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    const headerHeight = 200; // Adjust as needed

    const handleScroll = () => {
      const offset = window.scrollY;

      setIsScrolled(offset > headerHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = 'hidden';
    } else document.body.style.overflow = 'scroll';
    return () => {};
  }, [isNavOpen]);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    if (subNavOpen) {
      setSubNavOpen(undefined);
    }
  };

  const formatPhoneNumber = (phone: string) => {
    const cleaned = ('' + phone).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return phone;
  };

  const handleSubNavClick = (event: any) => {
    const clickedItem = event.target.textContent;
    const selectedNav = navs.find((nav) => nav.name === clickedItem);
    if (selectedNav?.name === subNavOpen) {
      setSubNavOpen(undefined);
      return;
    }

    // open subnav if subpages are present for nav
    setSubNavOpen(selectedNav?.subpages ? selectedNav : undefined);
  };

  return (
    <header className=''>
      <div className={`top-0 z-50 h-[9vh] bg-primary-lt2`}></div>
      <div
        className={`bg-neutral-9 fixed top-0 z-50 w-full transition-all duration-fast ease-in-out ${isScrolled ? 'h-[9vh]' : 'h-[9vh]'}`}
      >
        {/* super header */}
        {/* <SuperHeader
          phone={phone}
          address={address}
          email={email}
          addressLink={addressLink}
          isScrolled={isScrolled}
        /> */}
        <div
          className={`relative top-0 flex h-[9vh] justify-between text-center align-middle shadow-2xl transition-all duration-fast lg:grid lg:grid-cols-12`}
        >
          {/* desktop nav */}
          <div className='border-neutral-6 relative flex flex-grow items-center justify-center  lg:col-span-2'>
            <a href='/'>
              <div className='hover:text-accent text-neutral-1 dark:text-neutral-1 overflow-clip text-center transition-all duration-fast'>
                <img src={logo} alt='logo' className='h-[8vh] py-2' />
              </div>
            </a>
          </div>
          <nav className='border-neutral-6 hidden items-center justify-end gap-[1.8vw]  px-16 align-middle lg:col-span-8  lg:flex xl:col-span-8'>
            {navs.map((nav) => (
              <div key={nav.name} className='group relative'>
                <a
                  className='text-bold text-neutral-1 dark:text-neutral-1 text-lg transition duration-fast ease-in-out hover:text-primary-md2'
                  href={`${nav.link}`}
                >
                  {nav.name}
                </a>
                {nav.subpages && (
                  <div className='w-fit-content pointer-events-none absolute left-0 top-full flex max-h-[70vh] translate-x-[-2.5vw] flex-col flex-wrap py-2 opacity-0 shadow-md transition-opacity duration-300 group-hover:pointer-events-auto group-hover:opacity-100'>
                    {nav.subpages.map((subpage) => (
                      <a
                        key={subpage.name}
                        href={`${nav.link}${subpage.link}`}
                        className='bg-neutral-9 text-neutral-1 dark:bg-neutral-9 dark:text-neutral-1 min-w-[20vw] px-6 py-2 text-start text-lg hover:text-primary-md2'
                      >
                        {subpage.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div
            onClick={toggleNav}
            className={`text-neutral-1 dark:text-neutral-1 z-50 flex w-20 cursor-pointer items-center justify-center text-2xl transition-transform duration-fast lg:hidden ${isNavOpen ? 'rotate-180 opacity-100' : 'rotate-0 opacity-100'}`}
          >
            {isNavOpen ? (
              <Icon icon='mdi:close' className='text-3xl' />
            ) : (
              <Icon icon='mdi:menu' className='text-3xl' />
            )}
          </div>
          {/* mobile nav */}
          <div
            className={`absolute left-0 top-full z-50 h-fit w-full transform overflow-y-auto overflow-x-hidden py-4 pt-0 shadow-md transition-transform duration-fast lg:hidden ${isNavOpen ? 'scale-y-100' : 'scale-y-0'} ${isScrolled ? 'min-h-[94vh]' : 'min-h-[90vh]'} origin-top transition-transform duration-fast ease-in-out`}
          >
            <nav
              className={`bg-neutral-9 dark:bg-neutral-9 flex h-fit flex-col px-8 pb-64 pt-4 duration-md ease-in-out ${subNavOpen ? 'z-0 translate-x-[-95%]' : 'z-20 translate-x-[0]'} ${isScrolled ? 'min-h-[94vh]' : 'min-h-[90vh]'}`}
            >
              {navs.map((nav) => (
                <div className='flex px-6 py-4' key={nav.name}>
                  {!nav.subpages ? (
                    <a
                      href={`${nav.link}`}
                      className='text-neutral-1 dark:bg-neutral-9 dark:text-neutral-1 text-base'
                    >
                      {nav.name}
                    </a>
                  ) : (
                    <button
                      onClick={handleSubNavClick}
                      className='text-neutral-1 dark:bg-neutral-9 dark:text-neutral-1 flex items-center justify-center text-base'
                    >
                      <p className=''>{nav.name}</p>
                      <Icon
                        icon='mingcute:arrows-left-line'
                        className='rotate-180 text-2xl text-primary-md1'
                      />
                    </button>
                  )}
                </div>
              ))}
              <a
                href='/contact'
                className='flex justify-items-center self-center'
              >
                <button className='text-neutral-1 my-2 transform rounded-xl bg-primary-lt1 px-4 py-2 text-base transition duration-fast ease-in-out hover:scale-md hover:bg-primary-lt2'>
                  Hire Us
                </button>
              </a>
            </nav>
            {/* subnav for subpages */}
            <nav
              className={`bg-neutral-9 dark:bg-neutral-9 absolute inset-0 flex h-fit min-h-screen flex-col px-8 pb-64 pt-4 text-left duration-md ease-in-out ${subNavOpen ? 'z-20 translate-x-[0]' : 'z-0 translate-x-[95%]'}`}
            >
              <button
                onClick={handleSubNavClick}
                className='dark:bg-neutral-9 flex items-center justify-start pb-2 text-primary-md1'
              >
                <Icon icon='mingcute:arrows-left-line' className='text-2xl' />
                <p className='text-xl'>Back</p>
              </button>
              {subNavOpen?.subpages?.map((subpage) => (
                <a
                  key={subpage.name}
                  href={`${subNavOpen.link}${subpage.link}`}
                  className='bg-neutral-9 text-neutral-1 dark:bg-neutral-9 dark:text-neutral-1 py-2 text-base hover:text-primary-md2'
                >
                  {subpage.name}
                </a>
              ))}
            </nav>
          </div>
          <div className='hidden px-4 text-sm lg:col-span-2 lg:flex lg:justify-around xl:col-span-2'>
            {/* <div className='group hidden cursor-pointer items-center justify-center gap-[1.4vw] self-center xl:flex'>
              <a
                href={`tel:${phone}`}
                className='group hidden cursor-pointer items-center justify-center gap-[1.4vw] self-center xl:flex'
              >
                <Icon
                  icon='akar-icons:phone'
                  className='text-2xl text-primary-md1 transition-all duration-fast group-hover:text-primary-md2'
                />
                <span className='hidden text-justify text-neutral-1 transition-all duration-fast group-hover:scale-md group-hover:underline xl:inline dark:text-neutral-1'>
                  {formatPhoneNumber(phone)}
                </span>
              </a>
            </div> */}
            <a href='#contact' className='flex self-center'>
              <button className='text-neutral-1 transform rounded-xl bg-primary-lt1 px-4 lg:px-8 py-2 lg:py-3 transition duration-fast ease-in-out hover:scale-sm hover:bg-primary-lt2'>
                <span className=''>Hire Us!</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
