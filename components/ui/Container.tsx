import { HTMLAttributes } from 'react';

export function Container({
  className = '',
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`container-x ${className}`.trim()} {...rest}>
      {children}
    </div>
  );
}
