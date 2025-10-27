import Image, { StaticImageData } from "next/image";

type PrimaryButtonProps = {
  text: string;
  onClick?: () => void;
  style?: string;
  icon?: StaticImageData;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  onClick,
  style,
  icon,
}) => {
  return (
    <button
      className={`bg-primary py-2 px-4 rounded-md overflow-hidden cursor-pointer text-sm lg:text-base text-white ${style}`}
      onClick={onClick}
    >
      {text}
      {icon && <Image src={icon} alt="title" width={20} height={20} />}
    </button>
  );
};

export default PrimaryButton;
