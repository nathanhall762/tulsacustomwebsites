import { Icon } from '@iconify-icon/react/dist/iconify.mjs';

interface Props {
  heading: string;
  body_text: string;
  card: {
    icon: string;
    heading: string;
    body_text: string;
  }[];
}

const InfoCardList: React.FC<Props> = ({ heading, body_text, card }) => {
  return (
    <>
      <div className='my-16 flex flex-col px-4 text-center lg:my-32'>
        <div className='items-center pb-16'>
          <h2 className='pb-4 text-neutral-1'>{heading}</h2>
          <div className='mx-auto mb-8 h-[2px] w-[40%] max-w-2xl bg-primary-md1'></div>
          <p className=''>{body_text}</p>
        </div>
        <div className='grid grid-cols-1 gap-x-4 gap-y-8 lg:grid-cols-4 '>
          {card.map((card, index) => (
            <div
              className={`rounded-3xl bg-gradient-to-r ${index % 2 !== 0 ? 'from-secondary-md1 to-primary-lt2' : 'from-primary-lt2 to-secondary-md1'}  p-[3px]`}
              key={index}
            >
              <div className='flex h-full flex-col items-center gap-4 rounded-[calc(1.5rem-3px)] bg-neutral-9 p-6'>
                <h3 className=''>{card.heading}</h3>
                <Icon icon={card.icon} className='text-4xl text-primary-lt1' />
                <p>{card.body_text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default InfoCardList;
