import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import { useInView } from 'react-intersection-observer';

interface Props {
  heading: string;
  body_text: string;
  card: {
    icon: string;
    heading: string;
    body_text: string;
  }[];
}

const InfoCardList: React.FC<Props> = ({ heading, body_text, card: cards }) => {
  const { ref: cardRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <>
      <div
        ref={cardRef}
        className='my-16 flex flex-col px-4 text-center lg:my-32'
      >
        <div className='items-center pb-16'>
          <h2 className='bg-border-gradient bg-clip-text pb-4 text-transparent'>
            {heading}
          </h2>
          <div className='bg-primary-md1 mx-auto mb-8 h-[2px] w-[40%] max-w-2xl'></div>
          <p className='h2-sub'>{body_text}</p>
        </div>
        <div className='grid grid-cols-1 gap-x-4 gap-y-8 lg:grid-cols-4 '>
          {cards.map((card, index) => {
            const indexStyle = `animate-slideFromLeft${index + 1} delay-${index * 200}`;

            return (
              <div
                key={index}
                className={`rounded-3xl opacity-0 ${inView ? indexStyle : ''} ${index % 2 !== 0 ? 'bg-border-gradient' : 'bg-border-gradient-reverse'} p-[3px]`}
              >
                <div className='flex h-full flex-col items-center gap-4 rounded-[calc(1.5rem-3px)] bg-neutral-9 p-6'>
                  <h3 className=''>{card.heading}</h3>
                  <Icon
                    icon={card.icon}
                    className='text-primary-lt1 text-8xl'
                  />
                  <p className='h3-sub'>{card.body_text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default InfoCardList;
