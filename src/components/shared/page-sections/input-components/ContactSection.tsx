import ContactForm from './ContactForm';

interface Props {
  heading: string;
  businessName?: string;
  businessAddress?: string;
  businessPhone?: string;
  businessEmail?: string;
  formContent: {
    heading: string;
    body: string;
  };
  backgroundTexture: string;
}

const ContactSection: React.FC<Props> = ({
  heading,
  businessName,
  businessAddress,
  businessPhone,
  businessEmail,
  formContent: { heading: formHeading, body },
  backgroundTexture,
}) => {
  const formatPhoneNumber = (phone: string) => {
    const cleaned = ('' + phone).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return phone;
  };

  return (
    <div className='relative flex w-full justify-center bg-fade-up pb-40 pt-20'>
      <div
        className='absolute left-0 top-0 -z-10 h-full w-full bg-cover bg-center'
        style={{
          backgroundImage: `url(${backgroundTexture})`,
        }}
      ></div>
      <div className='mt-16 max-w-[1500px]' id='contact'>
        <div className='flex flex-col items-center'>
          <h2 className='mb-8 text-center'>{heading}</h2>
          <div className='mb-16 h-[2px] w-3/4 max-w-2xl bg-border-gradient'></div>
        </div>
        <div className='relative flex h-fit flex-col-reverse justify-start lg:flex-row lg:p-10'>
          <div className='flex flex-col items-center py-10 lg:w-[40vw]'>
            <div
              className='mb-4 h-[50vh] w-[90%] rounded-3xl bg-neutral-5 bg-cover'
              style={{ border: '0' }}
            >
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206117.97007408098!2d-95.93148986220574!3d36.17657409458423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b692b8ddd12e8f%3A0xe76910c81bd96af7!2sTulsa%2C%20OK!5e0!3m2!1sen!2sus!4v1731106576633!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
                className='h-full w-full rounded-3xl'
                loading='lazy'
                title={`Map of ${businessName}`}
              ></iframe>
            </div>
            <div className='h2-sub mb-4 flex flex-col items-center px-8'>
              <address className='mb-8 text-neutral-9 dark:text-neutral-1'>
                {businessAddress}
              </address>
              <p className='mb-4'>
                <a href={`tel:${businessPhone}`}>
                  {formatPhoneNumber(businessPhone || '')}
                </a>
              </p>
              <p className='mb-4'>
                <a href={`mailto:${businessEmail}`}>{businessEmail}</a>
              </p>
            </div>
            {/* <table className='text-neutral-9 dark:text-neutral-1 h3-sub'>
              <tbody>
                <tr>
                  <td>MONDAY</td>
                  <td>9AM - 5PM</td>
                </tr>
                <tr>
                  <td>TUESDAY</td>
                  <td>9AM - 5PM</td>
                </tr>
                <tr>
                  <td>WEDNESDAY</td>
                  <td>9AM - 5PM</td>
                </tr>
                <tr>
                  <td>THURSDAY</td>
                  <td>9AM - 5PM</td>
                </tr>
                <tr>
                  <td>FRIDAY</td>
                  <td>9AM - 5PM</td>
                </tr>
                <tr>
                  <td>SATURDAY</td>
                  <td>CLOSED</td>
                </tr>
                <tr>
                  <td>SUNDAY</td>
                  <td>CLOSED</td>
                </tr>
              </tbody>
            </table> */}
          </div>
          <div className='h-50vh mb-12 lg:mb-0 lg:w-[60vw]'>
            {/* contact form goes here */}
            <ContactForm content={{ heading: formHeading, body: body }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
