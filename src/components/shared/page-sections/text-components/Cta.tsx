import Button from '../../ui/Button';

interface Props {
  cta: string;
  button_text: string;
  url: string;
  image: string;
}

const Cta: React.FC<Props> = ({ cta, button_text, url, image }) => {
  return (
    <div className='my-40 w-full'>
      <div className='flex flex-col items-center justify-center gap-16 bg-border-gradient-reverse p-8 py-16 shadow-md lg:flex-row lg:py-12'>
        <div className='aspect-square lg:size-[15%] '>
          <img
            src={image}
            alt='Tulsa Custom Websites Logo'
            className='h-full w-full object-cover'
          />
        </div>
        <div className='flex flex-col items-center gap-8 '>
          <h2 className='w-fit text-center font-semibold text-neutral-9 lg:text-left lg:text-[9.6rem]'>
            {cta}
          </h2>
          <div className='group rounded-2xl bg-border-gradient p-2 transition duration-300 ease-in-out hover:scale-110'>
            <Button
              text={button_text}
              url='#contact'
              buttonColor='bg-secondary-3'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
