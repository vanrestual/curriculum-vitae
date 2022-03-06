import { AnchorHTMLAttributes, HTMLAttributes, ElementType } from 'react';

interface ItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: ElementType;
  label: string;
}

const Item = ({ href, icon: Icon, label, ...props }: ItemProps) => {
  return (
    <a href={href} target="_blank" rel="noreferrer noopener" className="inline-flex print:items-center md:items-center print:justify-center sm:justify-center hover:bg-blue-400 focus-visible:bg-blue-400 text-white px-4 -mx-4 py-2 print:py-3 print:rounded md:py-3 transition-colors sm:rounded focus:outline-none duration-300" {...props}>
      <Icon className="w-4 h-4 shrink-0 mt-0.5 print:mt-0 sm:mt-0" />
      <span className="text-xs font-medium tracking-wider ml-2 leading-5 print:leading-normal sm:leading-normal">{label}</span>
    </a>
  )
}

type InformationProps = { information: ItemProps[] } & HTMLAttributes<HTMLDivElement>;

const Information = ({ information, ...props }: InformationProps) => {
  return (
    <div className="flex flex-col print:flex-row md:flex-row print:items-center md:items-center justify-between py-3 print:py-0 md:py-0 print:px-4" {...props}>
      {information.map((item, index) => (
        <Item key={index} {...item} />
      ))}
    </div>
  )
}

export default Information;
