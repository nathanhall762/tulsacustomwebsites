// import { Icon } from '@iconify/react';
// import snowflake from '@iconify/icons-mdi/snowflake';
import { useState } from 'react';

interface Props {
  heading: string;
  default_card: {
    heading: string;
    body_text: string;
    image: string;
    alt_image_text: string;
    call_to_action_text?: string;
    call_to_action_link?: string;
  };
  cards: {
    heading: string;
    body_text: string;
    image: string;
    alt_image_text: string;
    call_to_action_text?: string;
    call_to_action_link?: string;
  }[];
}

const TabListCards: React.FC<Props> = ({
  heading,
  default_card: defaultCard,
  cards,
}) => {
  const [selected, setSelected] = useState<string>('');

  const handleTabClick = (event: any) => {
    const name = event.target.textContent;
    const selectedTab = cards.find((card) => card.heading === name);
    if (selectedTab?.heading === selected) {
      setSelected('');
      return;
    }
    setSelected(selectedTab ? selectedTab.heading : '');
  };

  return (
    <>
      <div>
        <div className='mx-auto my-16 flex flex-col items-center rounded-3xl bg-neutral-7 p-8 px-4 text-center shadow-xl lg:mx-12 lg:my-32 lg:p-16 lg:pb-24 lg:pl-32'>
          <div className='pb-8 lg:pb-16'>
            <h2 className='text-primary pb-4'>{heading}</h2>
            <div className='bg-primary-md1 m-auto h-[2px] w-[vw%] max-w-2xl'></div>
          </div>
          <div className='w-full flex-col-reverse items-center lg:flex lg:flex-row lg:justify-center'>
            <div className='grid grid-cols-2 gap-2 pt-4 lg:grid-cols-1 lg:gap-4 lg:pt-0'>
              {/* card heading list */}
              {cards.map((card) => (
                <div
                  onClick={handleTabClick}
                  className={`${selected === card.heading ? 'scale-110 bg-opacity-100 text-neutral-2' : 'bg-opacity-70 text-neutral-3'} bg-neutral-9 hover:scale-110  hover:bg-opacity-100`}
                >
                  <p
                    className={`hover:text-primary w-full p-4 text-xl transition-transform duration-100 ease-in-out hover:cursor-pointer`}
                  >
                    {card.heading}
                  </p>
                </div>
              ))}
            </div>
            <div className={`${!selected ? '' : 'hidden'} min-h-3xl w-full`}>
              <div
                style={{ backgroundImage: `url('${defaultCard.image}')` }}
                aria-label={defaultCard.alt_image_text}
                className='group flex h-3xl w-full flex-grow flex-col justify-end bg-cover bg-center shadow-2xl backdrop-blur-sm lg:m-0'
              >
                <div className='flex flex-col justify-center bg-neutral-9 bg-opacity-70 px-2 py-4 backdrop-blur-sm lg:min-h-[45%] lg:justify-start'>
                  <div className='overflow-clip text-ellipsis pb-4'>
                    <h3 className='pb-4'>{defaultCard.heading}</h3>
                    <p className='text-base'>{defaultCard.body_text}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* card body */}
            {cards.map((card) => (
              <div
                className={`${selected === card.heading ? '' : 'hidden'} w-full`}
              >
                <div
                  style={{ backgroundImage: `url('${card.image}')` }}
                  aria-label={card.alt_image_text}
                  className='group flex h-3xl w-full flex-grow flex-col justify-end bg-cover bg-center shadow-2xl backdrop-blur-sm lg:m-0'
                >
                  <div className='flex flex-col justify-center bg-neutral-9 bg-opacity-70 px-2 py-4 backdrop-blur-sm lg:min-h-[45%] lg:justify-start'>
                    <div className='overflow-clip text-ellipsis pb-4'>
                      <h3 className='pb-4'>{card.heading}</h3>
                      <p className='pb-4 text-base'>{card.body_text}</p>
                      <a
                        className='hover:text-primary-md2 text-xl text-neutral-1 underline hover:scale-110'
                        href={card.call_to_action_link}
                      >
                        {card.call_to_action_text}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TabListCards;
