import { HTMLAttributes } from "react";

export default function Container(props: HTMLAttributes<HTMLDivElement>) {
  return <div className="print:px-0 px-4 sm:px-8 md:px-12 lg:px-[10mm]" {...props}>{props.children}</div>;
}
