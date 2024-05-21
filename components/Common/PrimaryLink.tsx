import Link from 'next/link';

type Props = {
  text: string;
  href: string;
};

const PrimaryLink = ({ text, href }: Props) => {
  return (
    <Link
      href={href}
      className="rounded-md bg-primary px-8 py-3 text-base font-bold text-white shadow-signUp duration-300 hover:bg-white hover:text-primary md:px-9 lg:px-8 xl:px-9"
    >
      {text}
    </Link>
  );
};

export default PrimaryLink;
