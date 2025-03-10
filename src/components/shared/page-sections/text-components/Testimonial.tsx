import Markdown from 'react-markdown';

interface Props {
  heading: string;
  body: string;
}

const Testimonial: React.FC<Props> = ({ heading, body }) => {
  return (
    <>
      <div className='flex flex-col items-center p-4'>
        <div className='max-w-5xl bg-neutral-7 p-8'>
          {/* <h2 className='pb-4'>{content.heading}</h2> */}
          <Markdown>{body}</Markdown>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
