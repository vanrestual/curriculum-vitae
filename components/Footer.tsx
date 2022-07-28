import CheckIcon from './icons/Check';
import Container from './Container';

interface FooterProps {
  title: string;
  items: string[];
  link: string;
  labelLink: string;
}

export default function Footer({ title, items, link, labelLink }: FooterProps) {
  return (
    <footer className="shrink-0">
      <div className="flex flex-row items-center space-x-2">
        <hr className="border-gray-200 grow" />
        <h5 className="shrink-0 text-sm tracking-wide font-medium text-gray-600">{title}</h5>
        <hr className="border-gray-200 grow" />
      </div>
      <Container>
        <ul className="my-3.5 flex flex-col">
          {items.map((item, index) => (
            <li key={index} className="text-gray-700 flex space-x-2">
              <CheckIcon className="h-4 w-4 shrink-0" />
              <p className="text-xs text-justify block leading-5" dangerouslySetInnerHTML={{ __html: item }} />
            </li>
          ))}
        </ul>
        <h6 className="text-center text-xs tracking-wider underline"><a href={link} target="_blank" rel="noreferrer noopener" className="focus:outline-none text-blue-500 hover:text-blue-600 focus:text-blue-600 active:text-blue-700 transition-colors duration-300">{labelLink}</a></h6>
      </Container>
    </footer>
  )
}