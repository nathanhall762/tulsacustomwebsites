interface SidekickProps {
  heading: string;
  subheading: string;
  image: string;
  call_to_action_text?: string;
  call_to_action_link?: string;
}

const Sidekick: React.FC<SidekickProps> = ({
  heading: welcomeText,
  subheading: tagline,
  image,
  call_to_action_text: callToActionText,
  call_to_action_link: callToActionLink,
}) => {
  return (
    <div className='relative w-full'>
      <div className='bg-black absolute inset-0 z-0 h-full w-full bg-opacity-50 lg:bg-opacity-30'></div>
      <div
        className='lg:[50vh] flex h-[60vh] w-full flex-col justify-end bg-cover bg-center'
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className='lg:pm-16 relative z-10 mb-8 w-fit rounded-3xl bg-neutral-8 bg-opacity-50 px-4 text-left backdrop-blur-lg lg:ml-16 lg:mr-64 lg:px-12'>
          <div className='fade-in-up'>
            <h1 className='pb-2 font-normal text-neutral-2 drop-shadow-xl text-shadow-xl lg:text-neutral-1'>
              {welcomeText}
            </h1>
            <p className='h1-sub mt-2 pb-8 tracking-widest drop-shadow-xl text-shadow-xl lg:mt-6 lg:pb-16'>
              {tagline}
            </p>
            {callToActionLink && (
              <div className='flex flex-col items-center justify-center gap-4 lg:flex-row lg:justify-start lg:gap-16'>
                <a href={callToActionLink}>
                  <button className='bg-</a>other hover:bg-accent bg-primary-md1 hover:bg-primary-md2 transform rounded-xl px-6 py-2 text-base text-neutral-2 transition duration-300 ease-in-out hover:scale-110 lg:px-12 lg:py-4 lg:text-lg'>
                    {callToActionText}
                  </button>
                </a>
                <p className='text-base text-neutral-2 opacity-100 lg:text-2xl'>
                  <a href='tel:9189407800'>Call: (918) 940-7800</a>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidekick;
