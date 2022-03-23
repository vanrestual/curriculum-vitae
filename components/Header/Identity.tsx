import { ElementType, HTMLAttributes } from "react";

interface IdentityProps {
  name: string;
  profession: string;
  contact: {
    href: string;
    icon: ElementType;
    label: string;
  }[];
}

export default function Identity({ name, profession, contact }: IdentityProps) {
  return (
    <div className="flex flex-col print:flex-nowrap md:flex-nowrap md:flex-row print:flex-row flex-wrap w-full md:w-auto print:w-auto space-y-4 md:space-y-0 print:space-y-0 md:items-start md:justify-between print:items-start print:justify-between">
      <div className="grow truncate text-center print:text-left md:text-left">
        <h1 className='text-lg truncate tracking-wide text-blue-500 font-bold uppercase'>{name}</h1>
        <h2 className='text-base truncate tracking-wide text-gray-500 font-bold'>{profession}</h2>
      </div>
      <div className="flex print:inline-flex md:inline-flex w-full print:w-auto md:w-auto flex-col sm:flex-row print:flex-row space-y-2 print:space-y-0 sm:space-y-0 print:space-x-2 sm:space-x-2 items-center shrink-0">
        {contact.map((item, index) => (
          <a key={index} href={item.href} className="bg-blue-50 focus-visible:bg-blue-100 active:bg-blue-100 text-blue-500 hover:text-blue-600 active:text-blue-700 focus-visible:text-blue-600 focus:outline-none transition-colors duration-300 px-3 rounded py-1.5 w-full print:w-auto md:w-auto flex justify-center print:inline-flex sm:inline-flex items-center text-center">
            <item.icon className="w-4 h-4 shrink-0" />
            <span className="text-xs font-medium truncate tracking-wider ml-2">{item.label}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
