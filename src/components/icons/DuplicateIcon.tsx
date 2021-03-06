import React from 'react';
import classNames from 'classnames';

export function DuplicateIcon({
  className,
  ...rest
}: { className?: string } & React.SVGProps<SVGSVGElement>) {
  const duplicateIconCLS = classNames('h-5 w-5 cursor-pointer hover:text-white', className);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={duplicateIconCLS}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...rest}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
      />
    </svg>
  );
}
