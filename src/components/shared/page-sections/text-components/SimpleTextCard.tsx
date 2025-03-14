import ReactMarkdown from 'react-markdown';

interface SimpleTextCardProps {
  content: {
    heading: string;
    body_text: string;
    link_text?: string;
    link_url?: string;
  };
}

const SimpleTextCard: React.FC<SimpleTextCardProps> = ({
  content: {
  heading: aboutTitle,
  body_text: aboutBody,
  link_text: linkText,
  link_url: linkUrl,
  },
}) => {
  return (
    <div className='flex bg-neutral-8 px-4 py-8 lg:py-16'>
      <div className='mx-auto flex max-w-6xl justify-center rounded-3xl bg-neutral-7 px-6 py-8 text-center shadow-md lg:px-16 lg:py-16'>
        <div className='flex max-w-5xl flex-col items-center justify-around align-baseline'>
          <ReactMarkdown
            components={{
              p(props) {
                const { node, ...rest } = props;
                return <h2 className='mb-4' {...rest} />;
              },
            }}
            className='mb-4 text-lg text-neutral-1 lg:text-3xl'
          >
            {aboutTitle}
          </ReactMarkdown>
          <div className='mb-8 h-[2px] w-full max-w-2xl bg-primary-lt1'></div>
          <ReactMarkdown
            className='markdown text-start text-lg text-neutral-2 lg:text-2xl'
            components={{
              a(props) {
                const { node, ...rest } = props;
                return <a className='mb-2' target='_blank' {...rest} />;
              },
            }}
          >
            {aboutBody}
          </ReactMarkdown>
          {linkUrl && (
            <a
              href={linkUrl}
              className='pt-12 text-sm underline  underline-offset-4 transition-all duration-300 hover:text-primary-md1 lg:pt-24 lg:text-2xl'
            >
              {linkText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default SimpleTextCard;
