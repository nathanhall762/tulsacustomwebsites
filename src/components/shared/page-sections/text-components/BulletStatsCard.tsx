import ReactMarkdown from 'react-markdown';
import Button from '../../ui/Button';

interface Props {
  heading: string;
  bold_text?: string;
  body_text: string;
  image: string;
  image_alt_text: string;
  link_text?: string;
  link_url?: string;
}

const BulletStatsCard: React.FC<Props> = ({
  heading,
  bold_text,
  body_text,
  image: bg_image,
  image_alt_text,
  link_text,
  link_url,
}) => {
  return (
    <div className='flex w-full items-center justify-center'>
      <div
        className={`my-20 flex max-w-[1500px] justify-center bg-cover bg-center text-neutral-9 shadow-inner lg:px-[32rem]`}
        style={{ backgroundImage: `url('${bg_image}')` }}
        title={image_alt_text}
      >
        <div className='my-[-2rem] flex h-full flex-col justify-between rounded-[2.5rem] bg-neutral-3 py-8 text-center text-neutral-8 shadow-md transition-all lg:col-span-7 lg:px-6 lg:py-16 dark:bg-neutral-7 dark:text-neutral-2'>
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
  );
};

export default BulletStatsCard;
