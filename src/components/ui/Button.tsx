interface buttonProps {
  text: string;
  onClickFunc?: () => void;
  size?: 'sm' | 'md';
}

const button: React.FC<buttonProps> = ({ text, onClickFunc, size = 'md' }) => {
  const sizing = size === 'sm' ? 'px-10 py-3 text-base' : 'px-12 py-4 text-lg';

  return (
    <>
      <button
        onClick={onClickFunc}
        className={`${sizing} transform rounded-xl bg-primary-lt1 text-lg text-neutral-2 transition duration-300 ease-in-out hover:scale-110  hover:bg-primary-lt2`}
      >
        {text}
      </button>
    </>
  );
};

export default button;
