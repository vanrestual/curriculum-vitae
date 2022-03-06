import { HTMLAttributes } from "react";

export default function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className="print:px-0 py-4 px-4 sm:px-8 md:px-10 lg:px-[10mm]" {...props}>{props.children}</div>;
}