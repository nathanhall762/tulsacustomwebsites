import React, { useState, type ChangeEvent, type FormEvent } from 'react';
import { Icon } from '@iconify-icon/react';
import Button from '../../ui/Button';
import Field from '../../ui/Field';

interface FormData {
  body: string;
  contact: string;
  submit: boolean;
}

interface FormProps {
  content: { heading: string; body: string; };
}

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isValidPhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone.replace(/\D/g, ''));
};

const Form: React.FC<FormProps> = ({ content }) => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    body: '',
    contact: '',
    submit: false,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (
      !isValidEmail(formData.contact) &&
      !isValidPhoneNumber(formData.contact)
    ) {
      alert('Please enter a valid email or phone number.');
      return;
    }
    setFormData({ ...formData, submit: true });
    setStep(3);
  };

  return (
    <div className='size-full bg-border-gradient p-2 rounded-3xl'>
      <div className='size-full px-[10%] lg:px-[5%] py-6 bg-neutral-5 rounded-3xl'>
        {step === 1 && (
          <form
            onSubmit={handleSubmit}
            className='flex flex-col justify-between size-full gap-4 py-4 text-black-1 lg:px-8'
          >
            <div>
              <h2 className='text-neutral-9 text-center'>{content.heading}</h2>
              <p className='h3-sub text-black-2 mb-12'>
                {content.body}
              </p>
              <div className='lg:px-[10%] mb-20'>
                <Field
                  label='What do you want to build?'
                  name='body'
                  type='textarea'
                  placeholder='Question or message for our team'
                  value={formData.body}
                  onChange={handleChange}
                />
                <Field
                  label='Preferred phone/email'
                  name='contact'
                  type='text'
                  placeholder='Preferred Contact Method'
                  value={formData.contact}
                  onChange={handleChange}
                />
              </div>
            </div>
                <div className='flex justify-center'><Button text='Submit'></Button></div>
          </form>
        )}
        {step === 3 && formData.submit && (
          <div className='m-4 lg:m-16'>
            <p>
              Thank you for scheduling service with Zarn Automotive! Our
              representative will get back to you asap at your preferred contact
              method with available times.
            </p>
            <Icon
              icon='mdi:check'
              className='text-success'
              width='64'
              height='64'
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
