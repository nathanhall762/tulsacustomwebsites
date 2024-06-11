import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import ReactMarkdown from 'react-markdown';

interface Props {
  content: {
    heading: string;
    body_text: string;
    card: {
      heading: string;
      body_text: string;
    }[];
  };
}

const InfoCardList: React.FC<Props> = ({
  content: { heading, body_text, card },
}) => {
  return (
    <>
      <div className='flex flex-col px-4 py-16 text-center'>
        <div className='items-center pb-4'>
          <h2 className='pb-4 text-neutral-1'>{heading}</h2>
          <div className='mx-auto h-[2px] w-[40%] max-w-2xl bg-primary-md1'></div>
        </div>
        <ReactMarkdown
          components={{
            p(props) {
              const { node, ...rest } = props;
              return <p className='mb-4' {...rest} />;
            },
          }}
          className='mb-4 text-lg font-bold lg:text-3xl'
        >
          {body_text}
        </ReactMarkdown>
        <div className='grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1'>
          {/* {card.map((card) => (
            <a
              href={card.link}
              className='group flex aspect-[2/3] w-full max-w-2xl transform cursor-pointer flex-col justify-end bg-cover shadow-2xl transition-transform hover:scale-105 hover:shadow-none'
            >
              <div
                style={{ backgroundImage: `url('${card.image}')` }}
                aria-label={card.alt_image_text}
                className='group flex aspect-[2/3] w-full max-w-2xl transform cursor-pointer flex-col justify-end bg-cover shadow-2xl transition-transform hover:scale-105 hover:shadow-none'
              >
                <div className='flex h-[45%] flex-col bg-neutral-9 bg-opacity-70 px-2 py-4 backdrop-blur-sm transition-all duration-1000'>
                  <div className='size-full overflow-clip text-ellipsis pb-4'>
                    <h3 className='pb-4'>{card.heading}</h3>
                    <p className='text-base'>{card.body_text}</p>
                  </div>
                </div>
              </div>
            </a>
          ))} */}
          {card.map((card, index) => (
            <div className='flex flex-col items-center gap-4 p-4' key={index}>
              <h3 className=''>{card.heading}</h3>
              <Icon
                icon='svg-spinners:blocks-wave'
                className='text-xl text-primary-lt1'
              />
              <p>{card.body_text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default InfoCardList;
