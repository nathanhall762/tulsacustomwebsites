import Button from '../../ui/Button';
import ReactMarkdown from 'react-markdown';

interface Props {
  heading: string;
  subheading?: string;
  pricingOptions: {
    title: string;
    description: string;
    price: string;
    buttonText: string;
    buttonLink: string;
  }[];
}

const Pricing: React.FC<Props> = ({ heading, subheading, pricingOptions }) => {
  return (
    <section className='relative flex w-full flex-col justify-center lg:my-[9.6rem]'>
      <div className='flex max-w-[1500px] flex-col gap-[4.8rem] lg:mx-32'>
        <div className='flex flex-col items-center'>
          <h2 className='mb-8 text-center'>{heading}</h2>
          <div className='mb-16 h-[2px] w-3/4 max-w-2xl bg-border-gradient'></div>
          <p className='h2-sub text-center'>{subheading}</p>
        </div>
        <div className='flex flex-col px-[14.4rem] lg:flex-row lg:justify-center lg:gap-[9.6rem]'>
          {pricingOptions.map((option, index) => (
            <div
              key={index}
              className={`relative rounded-3xl ${index % 2 !== 0 ? 'bg-border-gradient' : 'bg-border-gradient-reverse'} duration-lg w-full bg-clip-padding p-[3px] transition-all hover:scale-md`}
            >
              <div className='tr group flex h-full cursor-default flex-col items-center gap-4 rounded-[calc(1.5rem-3px)] bg-neutral-6 px-8 py-16 transition-all duration-md hover:bg-opacity-25'>
                <h3 className='mb-4 text-center text-[6.4rem]'>
                  {option.title}
                </h3>
                <ReactMarkdown
                  components={{
                    p(props) {
                      const { node, ...rest } = props;
                      return <p className='' {...rest} />;
                    },
                    ul({ node, ...props }) {
                      return <ul className='' {...props} />;
                    },
                    li({ node, ...props }) {
                      return <li className='' {...props} />;
                    },
                  }}
                  className='mb-8 text-[2.4rem] text-white-2'
                >
                  {option.description}
                </ReactMarkdown>
                <div className='flex w-full items-baseline justify-center gap-4'>
                  <p className=' text-[1.5rem] text-white-2'>Starting at</p>
                  <p className='font-teko text-[9.6rem]'>{option.price}</p>
                </div>
                <div className='mt-16 flex justify-center'>
                  <a href={option.buttonLink}>
                    <Button
                      text={option.buttonText}
                      url='#contact'
                      className='hover:text-shadow-glow hover:drop-shadow-glow hover:!bg-white-2 hover:text-neutral-9 hover:shadow-white-1 group-hover:border-2 group-hover:border-white-1 group-hover:bg-transparent'
                    ></Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
