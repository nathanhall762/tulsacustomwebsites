import { useState } from 'react';

const ColorView: React.FC = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className={`${isClicked ? 'bg-white' : 'bg-black'} p-8 text-center`}>
      <button
        onClick={handleClick}
        className={`mb-8 rounded-md p-4 ${isClicked ? 'bg-black text-white' : 'bg-white text-black'}`}
      >
        Switch BG
      </button>
      <div className='flex w-full items-center'>
        <div className='size-32 bg-neutral-1'></div>
        <div className='size-32 bg-neutral-2'></div>
        <div className='size-32 bg-neutral-3'></div>
        <div className='size-32 bg-neutral-4'></div>
        <div className='size-32 bg-neutral-5'></div>
        <div className='size-32 bg-neutral-6'></div>
        <div className='size-32 bg-neutral-7'></div>
        <div className='size-32 bg-neutral-8'></div>
        <div className='size-32 bg-neutral-9'></div>
        <h2 className={`${isClicked ? 'text-black' : 'text-white'}`}>
          neutral
        </h2>
      </div>
      <div className='flex w-full items-center'>
        <div className='size-32 bg-primary-dk1'></div>
        <div className='size-32 bg-primary-dk2'></div>
        <div className='size-32 bg-primary-md1'></div>
        <div className='size-32 bg-primary-md2'></div>
        <div className='size-32 bg-primary-md3'></div>
        <div className='size-32 bg-primary-lt1'></div>
        <div className='size-32 bg-primary-lt2'></div>
        <h2 className={`${isClicked ? 'text-black' : 'text-white'}`}>
          primary
        </h2>
      </div>
      <div className='flex w-full '>
        <div className='size-32 bg-secondary-dk1'></div>
        <div className='size-32 bg-secondary-dk2'></div>
        <div className='size-32 bg-secondary-md1'></div>
        <div className='size-32 bg-secondary-md2'></div>
        <div className='size-32 bg-secondary-md3'></div>
        <div className='size-32 bg-secondary-lt1'></div>
        <div className='size-32 bg-secondary-lt2'></div>
        <h2 className={`${isClicked ? 'text-black' : 'text-white'}`}>
          secondary
        </h2>
      </div>
    </div>
  );
};

export default ColorView;
