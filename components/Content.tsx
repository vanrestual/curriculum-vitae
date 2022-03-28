import { HTMLAttributes } from "react";

export default function Content(props: HTMLAttributes<HTMLDivElement>) {
  return <main className="grow print:px-0 px-4 sm:px-8 md:px-12 lg:px-[10mm] flex flex-col space-y-4 py-6 md:py-4 print:py-4" {...props}>{props.children}</main>;
}