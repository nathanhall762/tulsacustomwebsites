import ReactMarkdown from 'react-markdown';
import Button from '../../ui/Button';

interface Props {
  heading: string;
  image: string;
  image_alt_text: string;
  bold_text?: string;
  body_text: string;
  link_url?: string;
  link_text?: string;
  reversed?: boolean;
  backgroundTexture?: string;
}

const ImageByCopy: React.FC<Props> = ({
  heading,
  image,
  image_alt_text,
  bold_text,
  body_text,
  link_url,
  link_text,
  reversed = false,
  backgroundTexture,
}) => {
  return (
    <section className='relative m-40 flex w-full justify-center'>
      <div
        className='absolute inset-0 -z-10 bg-cover bg-center'
        style={{
          backgroundImage: `url(${backgroundTexture})`,
        }}
      ></div>
      <div className={`my-24 max-w-[1500px]  lg:m-32`}>
        <div className='flex flex-col transition-all lg:grid lg:grid-cols-12 lg:gap-8'>
          <img
            src={image}
            alt={image_alt_text}
            className={`${reversed && 'lg:order-1'}  z-[0] box-border w-screen overflow-visible object-cover lg:col-span-5 lg:row-span-1 lg:h-full lg:w-full`}
          />
          <div className='radius-3xl z-[1] flex h-full flex-col justify-between bg-neutral-3 py-8 text-center text-neutral-8 shadow-md transition-all lg:col-span-7 lg:px-6 lg:py-16 dark:bg-neutral-7 dark:text-neutral-2'>
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
                  {heading}
                </ReactMarkdown>
                <div className='mb-16 h-[2px] w-3/4 max-w-2xl bg-border-gradient'></div>
                <div className='px-12'>
                  {bold_text && (
                    <ReactMarkdown
                      className='markdown text-left lg:text-left'
                      components={{
                        p(props) {
                          const { node, ...rest } = props;
                          return (
                            <strong>
                              <p
                                className='h2-sub mb-12 text-center text-primary-5'
                                {...rest}
                              />
                            </strong>
                          );
                        },
                      }}
                    >
                      {bold_text}
                    </ReactMarkdown>
                  )}
                  <ReactMarkdown
                    className='markdown mb-32 text-left lg:text-left'
                    components={{
                      p(props) {
                        const { node, ...rest } = props;
                        return (
                          <p className='h3-sub mb-2 text-[2.0rem]' {...rest} />
                        );
                      },
                    }}
                  >
                    {body_text}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
            {link_text && (
              <div>
                {link_url && <Button url={link_url} text={link_text}></Button>}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageByCopy;
