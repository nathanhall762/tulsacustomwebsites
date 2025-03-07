import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import { useInView } from 'react-intersection-observer';

interface Props {
  content: {
    heading: string;
    body_text: string;
    card: {
      icon: string;
      heading: string;
      body_text: string;
    }[];
  };
}

const InfoCardList: React.FC<Props> = ({ content }) => {
  const { ref: cardRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className='max-w-[1500px]'>
      <div
        ref={cardRef}
        className='my-16 flex flex-col px-8 text-center lg:my-32 '
      >
        <div className='flex flex-col items-center pb-24'>
          <h2 className='bg-border-gradient bg-clip-text pb-16 text-transparent'>
            {content.heading}
          </h2>
          <p className='h2-sub max-w-4xl'>{content.body_text}</p>
        </div>
        <div className='grid grid-cols-1 gap-x-4 gap-y-16 lg:grid-cols-4 '>
          {content.card.map((card, index) => {
            const indexAnimationStyle = `lg:animate-slideFromLeft${index + 1} lg:delay-${index * 200}`;

            return (
              <div
                key={index}
                className={`rounded-3xl lg:opacity-0 ${inView ? indexAnimationStyle : ''} ${index % 2 !== 0 ? 'bg-border-gradient' : 'bg-border-gradient-reverse'} p-[3px]`}
              >
                <div className='flex h-full flex-col items-center gap-8 rounded-[calc(1.5rem-3px)] bg-neutral-9 px-6 py-12'>
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
    </div>
  );
};

export default InfoCardList;
