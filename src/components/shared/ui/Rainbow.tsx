interface RainbowProps {}

const Rainbow: React.FC<RainbowProps> = ({}) => {
  return (
    <>
      <div className='absolute inset-0 z-0 flex flex-col justify-end'>
        <div className='relative'>
          <div className='bg-black absolute inset-0 z-0 bg-opacity-0 backdrop-blur-[2px] lg:backdrop-blur-sm'></div>
          <div className='h-8 w-full bg-primary-1'></div>
          <div className='h-8 w-full bg-primary-4'></div>
          <div className='h-8 w-full bg-primary-6'></div>
          <div className='h-8 w-full bg-secondary-4'></div>
          <div className='h-8 w-full bg-secondary-6'></div>
        </div>
      </div>
    </>
  );
};

export default Rainbow;
