interface buttonProps {
  text: string;
  onClickFunc?: () => void;
  url?: string;
  size?: 'sm' | 'md';
  buttonColor?: string;
  buttonBorder?: string;
  style?: React.CSSProperties;
  hoverColor?: string;
  className?: string;
}

const button: React.FC<buttonProps> = ({
  text,
  onClickFunc,
  url,
  size = 'md',
  buttonColor,
  style,
  className,
}) => {
  const sizing = size === 'sm' ? 'px-10 py-4 text-2xl' : 'px-12 py-4';
  const buttonStyle = buttonColor ? { backgroundColor: buttonColor } : {};

  if (url !== undefined) {
    return (
      <>
        <a href={url}>
          <button
            onClick={onClickFunc}
            className={`${sizing} rounded-xl bg-primary-5 text-neutral-2 transition-all duration-md ease-in-out hover:scale-110 hover:bg-primary-2 ${className}`}
            style={{ ...style }}
          >
            {text}
          </button>
        </a>
      </>
    );
  } else {
    return (
      <button
        onClick={onClickFunc}
        className={`${sizing} transform rounded-xl bg-primary-5 text-neutral-2 transition duration-300 ease-in-out hover:scale-110  hover:bg-primary-2 ${buttonColor}`}
      >
        {text}
      </button>
    );
  }
};

export default button;
