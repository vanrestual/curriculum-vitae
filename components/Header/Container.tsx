import { HTMLAttributes } from "react";
import clsx from 'clsx';

export default function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={clsx('print:px-0 px-4 sm:px-8 md:px-10 lg:px-[10mm]', className)} {...props}>{props.children}</div>;
}