import React from 'react';
import classNames from 'classnames';

export function BanIcon({
  className,
  ...rest
}: { className?: string } & React.SVGProps<SVGSVGElement>) {
  const banIconCLS = classNames('h-5 w-5 cursor-pointer hover:text-white', className);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={banIconCLS}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...rest}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
      />
    </svg>
  );
}
