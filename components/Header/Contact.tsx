import { AnchorHTMLAttributes, HTMLAttributes, ElementType } from "react"

interface BadgeProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: ElementType;
  label: string;
}

const Badge = ({ href, icon: Icon, label, ...props }: BadgeProps) => {
  return (
    <a href={href} className="bg-blue-50 focus-visible:bg-blue-100 active:bg-blue-100 text-blue-500 hover:text-blue-600 active:text-blue-700 focus-visible:text-blue-600 focus:outline-none transition-colors duration-300 px-3 rounded py-1.5 w-full print:w-auto md:w-auto flex justify-center print:inline-flex sm:inline-flex items-center text-center" {...props}>
      <Icon className="w-4 h-4 shrink-0" />
      <span className="text-xs font-medium truncate tracking-wider ml-2">{label}</span>
    </a>
  )
}

type ContactProps = { contact: BadgeProps[] } & HTMLAttributes<HTMLDivElement>;

const Contact = ({ contact, ...props }: ContactProps) => {
  return (
    <div className="flex print:inline-flex md:inline-flex w-full print:w-auto md:w-auto pt-1 flex-col sm:flex-row print:flex-row space-y-2 print:space-y-0 sm:space-y-0 print:space-x-2 sm:space-x-2 items-center shrink-0" {...props}>
      {contact.map((item, index) => (
        <Badge key={index} {...item} />
      ))}
    </div>
  )
}

export default Contact;
