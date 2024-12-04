import Image from "next/image";

const Icon = ({ name }: { name: string }) => {
  return <Image src={`/icons/${name}.svg`} alt={name} width={24} height={24} />;
};

export default Icon;