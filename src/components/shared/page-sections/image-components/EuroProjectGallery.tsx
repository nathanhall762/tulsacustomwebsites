import type { DocumentData } from 'firebase/firestore';

interface Props {
  content: {
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
  };
}

const EuroProjectGallery: React.FC<Props> = ({ content }) => {
  return (
    <>
      <div className='my-8 lg:my-16 lg:px-8'>
        <h3 className='mb-4 text-center text-lg font-bold lg:text-3xl'>
          {content.heading}
        </h3>
        <div className='bg-primary-md1 mx-auto mb-8 h-[2px] w-3/4 max-w-2xl'></div>
        <ul className='align-center m-0 grid grid-cols-1 text-center hover:cursor-pointer group-hover:shadow-inner sm:grid-cols-2'>
          {content.cards.map((card) => (
            <li
              key={card.heading} // Use the slug as a unique key for each project
              className='card-zoom group relative z-10 flex h-64 bg-cover bg-center'
            >
              <a
                className='flex size-full items-center justify-center  hover:scale-100'
                href={card.call_to_action_link}
              >
                <div
                  className='card-zoom-image group-hover:zoom-in z-0 group-hover:brightness-50 lg:brightness-100'
                  style={{
                    backgroundImage: `url(${card.image})`,
                  }}
                ></div>
                <span className='bg-white text-black dark:bg-black dark:text-white z-50 rounded bg-opacity-50 p-2 text-xl transition-all duration-300 ease-in-out hover:bg-opacity-100 group-hover:opacity-100'>
                  {card.heading}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default EuroProjectGallery;
