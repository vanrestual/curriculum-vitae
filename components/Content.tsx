import { HTMLAttributes } from "react";

export default function Content(props: HTMLAttributes<HTMLDivElement>) {
  return <main className="print:px-0 px-4 sm:px-8 md:px-12 lg:px-[10mm] flex flex-col space-y-4" {...props}>{props.children}</main>;
}