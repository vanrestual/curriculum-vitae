import { HTMLAttributes } from "react";

export default function WrapperTop({children, ...props}: HTMLAttributes<HTMLDivElement>){
  return <div className="flex flex-col print:flex-nowrap md:flex-nowrap md:flex-row print:flex-row flex-wrap w-full md:w-auto print:w-auto space-y-4 md:space-y-0 print:space-y-0 md:items-start md:justify-between print:items-start print:justify-between" {...props}>{children}</div>
}
