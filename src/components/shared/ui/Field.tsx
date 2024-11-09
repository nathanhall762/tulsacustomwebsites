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
    <div className='flex flex-col gap-2 mb-4'>
      <label htmlFor={name} className='text-black-1 field-label'>
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className='border-neutral-9 text-[1.6rem] rounded-lg border p-2'
      />
    </div>
  );
};

export default Field;
