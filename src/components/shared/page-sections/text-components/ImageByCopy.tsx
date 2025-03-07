import ReactMarkdown from 'react-markdown';
import Button from '../../ui/Button';

interface Props {
  content: {
    heading: string;
    image: string;
    image_alt_text: string;
    bold_text?: string;
    body_text: string;
    link_url?: string;
    link_text?: string;
    reversed?: boolean;
    backgroundTexture?: string;
  };
}

const ImageByCopy: React.FC<Props> = ({ content }) => {
  return (
    <section className='relative flex w-full justify-center lg:my-40'>
      <div
        className='absolute inset-0 -z-10 bg-cover bg-center'
        style={{
          backgroundImage: `url(${content.backgroundTexture})`,
        }}
      ></div>
      <div className={`max-w-[1500px] lg:mx-32 lg:my-40 `}>
        <div className='flex flex-col transition-all lg:grid lg:grid-cols-12 lg:gap-8'>
          <img
            src={content.image}
            alt={content.image_alt_text}
            className={`${content.reversed && 'lg:order-1'}  z-[0] box-border w-screen overflow-visible object-cover lg:col-span-5 lg:row-span-1 lg:h-full lg:w-full`}
          />
          <div className='radius-3xl z-[1] flex h-full flex-col justify-between bg-neutral-8/50 py-24 text-center text-neutral-1 shadow-md  transition-all lg:col-span-7 lg:bg-neutral-8/75 lg:px-6 lg:py-16 lg:text-neutral-2'>
            <div>
              <div className='flex flex-col items-center'>
                <ReactMarkdown
                  components={{
                    p(props) {
                      const { node, ...rest } = props;
                      return <h2 className='' {...rest} />;
                    },
                  }}
                  className=''
                >
                  {content.heading}
                </ReactMarkdown>
                <div className='mb-16 h-[2px] w-3/4 max-w-2xl bg-border-gradient'></div>
                <div className='px-12'>
                  {content.bold_text && (
                    <ReactMarkdown
                      className='markdown text-left lg:text-left'
                      components={{
                        p(props) {
                          const { node, ...rest } = props;
                          return (
                            <strong>
                              <p
                                className='h2-sub mb-12 text-center text-[2rem] leading-tight text-primary-7 lg:text-[3rem]'
                                {...rest}
                              />
                            </strong>
                          );
                        },
                      }}
                    >
                      {content.bold_text}
                    </ReactMarkdown>
                  )}
                  <ReactMarkdown
                    className='markdown mb-32 text-left lg:text-left'
                    components={{
                      p(props) {
                        const { node, ...rest } = props;
                        return (
                          <p
                            className='h3-sub mb-2 leading-loose lg:text-[2rem]'
                            {...rest}
                          />
                        );
                      },
                    }}
                  >
                    {content.body_text}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
            {content.link_text && (
              <div>
                {content.link_url && (
                  <Button
                    url={content.link_url}
                    text={content.link_text}
                  ></Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageByCopy;
