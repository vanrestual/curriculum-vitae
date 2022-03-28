import CalendarIcon from './icons/Calendar';
import CheckIcon from './icons/Check';

interface EducationProps {
  title: string;
  degree: string;
  university: string;
  lengthOfEducation: string;
  items: string[];
}

export default function Education({ title, degree, university, lengthOfEducation, items }: EducationProps) {
  return (
    <section>
      <h3 className="text-base tracking-wide font-bold text-blue-500 uppercase text-center md:text-left print:text-left mb-2">{title}</h3>
      <div className="flex w-full flex-col sm:flex-row print:flex-row justify-between space-y-1 sm:space-y-0 print:space-y-0">
        <h4 className="tracking-wide text-center sm:text-left print:text-left mb-1.5">
          <span className="block text-gray-800 font-bold text-sm mb-1">{degree}</span>
          <span className="block text-gray-600 font-medium text-xs">{university}</span>
        </h4>
        <span className="text-gray-400 flex justify-center sm:justify-end print:justify-end">
          <CalendarIcon className="h-4 w-4 mr-1.5 -mt-px" />
          <span className="text-xs tracking-wide italic">{lengthOfEducation}</span>
        </span>
      </div>
      <ul className="mt-3 sm:mt-px flex flex-col print:mt-px">
        {items.map((item, index) => (
          <li key={index} className="text-gray-700 flex space-x-2">
            <CheckIcon className="h-4 w-4 shrink-0" />
            <p className="text-xs text-justify block leading-5">{item}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
