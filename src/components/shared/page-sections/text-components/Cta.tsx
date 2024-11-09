import Button from '../../ui/Button';

interface Props {
  content: { cta: string; button_text: string; url: string; image: string };
}

const Cta: React.FC<Props> = ({ content }) => {
  return (
    <div className='my-40 w-full'>
      <div className='flex lg:flex-row flex-col justify-center items-center bg-border-gradient-reverse p-8 shadow-md gap-16 lg:py-12 py-16'>
      <div className='lg:size-[15%] aspect-square '>
        <img src={content.image} alt="Tulsa Custom Websites Logo" className='w-full h-full object-cover' />
      </div>
        <div className='flex flex-col items-center gap-8 '>
          <h2 className='font-semibold text-center text-neutral-9 lg:text-left lg:text-[9.6rem] w-fit'>
            {content.cta}
          </h2>
          <div className='bg-border-gradient p-2 rounded-2xl transition duration-300 ease-in-out hover:scale-110 group'>
            <Button text={content.button_text} url='#contact' buttonColor='bg-secondary-3' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
