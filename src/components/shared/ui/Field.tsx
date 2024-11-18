import type { ChangeEvent } from 'react';

interface FieldProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Field: React.FC<FieldProps> = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className='mb-4 flex flex-col gap-2'>
      <label htmlFor={name} className='field-label text-neutral-1'>
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className='rounded-2xl border-2 bg-neutral-1 p-4 text-[2rem] focus:border-primary-6 focus:outline-none focus:ring-0'
      />
    </div>
  );
};

export default Field;
