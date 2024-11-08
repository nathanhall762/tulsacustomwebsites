interface buttonProps {
  text: string;
  onClickFunc?: () => void;
  url?: string;
  size?: 'sm' | 'md';
}

const button: React.FC<buttonProps> = ({ text, onClickFunc, url, size = 'md' }) => {
  const sizing = size === 'sm' ? 'px-10 py-4 text-2xl' : 'px-12 py-4';

  return (
    <>
      <a href={url}>
        <button
          onClick={onClickFunc}
          className={`${sizing} transform rounded-xl bg-primary-5 text-neutral-2 transition duration-300 ease-in-out hover:scale-110  hover:bg-primary-2`}
        >
          {text}
        </button>
      </a>
    </>
  );
};

export default button;
