import Link from 'next/link';

interface AccountLoginButtonProps {
  href: string;
  className?: string;
  children?: React.ReactNode;
}

export default function AccountLoginButton(props: AccountLoginButtonProps) {

  return (
    <Link
      href={props.href}
      className={`box-border inline-flex min-h-11 w-full items-center justify-center rounded-md bg-black px-3 py-2 text-center text-xs font-medium text-white shadow-sm visited:text-white hover:text-white hover:no-underline sm:inline-flex sm:w-auto sm:px-5 sm:text-base hover:bg-gray-800 transition-colors duration-200 whitespace-nowrap ${props.className}`}
    >
      {props.children}
    </Link>
  );
} 