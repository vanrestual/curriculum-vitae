import { ElementType } from 'react';

interface InformationProps {
  information: {
    href: string;
    icon: ElementType;
    label: string;
  }[];
}

export default function Information({ information }: InformationProps) {
  return (
    <div className="py-3 print:py-0 md:py-0 mt-6 bg-blue-500 text-white print:mt-4 sm:mt-4">
      <div className="flex flex-col print:flex-row md:flex-row print:items-center md:items-center justify-between print:px-4 px-4 sm:px-8 md:px-12 lg:px-[10mm]">
        {information.map((item, index) => (
          <a key={index} href={item.href} target="_blank" rel="noreferrer noopener" className="inline-flex print:items-center md:items-center print:justify-center sm:justify-center hover:bg-blue-400 focus-visible:bg-blue-400 text-white px-4 -mx-4 py-2 print:py-3 print:rounded md:py-3 transition-colors sm:rounded focus:outline-none duration-300">
            <item.icon className="w-4 h-4 shrink-0 mt-0.5 print:mt-0 sm:mt-0" />
            <span className="text-xs font-medium tracking-wider ml-2 leading-5 print:leading-normal sm:leading-normal">{item.label}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
