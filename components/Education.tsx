import CalendarIcon from './icons/Calendar';

interface EducationProps {
  title: string;
}

export default function Education({ title }: EducationProps) {
  return (
    <section>
      <h3 className="text-base tracking-wide font-bold text-blue-500 uppercase text-center md:text-left print:text-left mb-2">{title}</h3>
      <div className="flex w-full flex-col sm:flex-row print:flex-row justify-between space-y-1 sm:space-y-0 print:space-y-0">
        <h4 className="tracking-wide text-center sm:text-left print:text-left mb-1.5">
          <span className="block text-gray-800 font-bold text-sm mb-1">Bachelor of Informatics Engineering</span>
          <span className="block text-gray-600 font-medium text-xs">University of Muhammadiyah Jember</span>
        </h4>
        <span className="text-gray-400 flex justify-center sm:justify-end print:justify-end">
          <CalendarIcon className="h-4 w-4 mr-1.5 -mt-px" />
          <span className="text-xs tracking-wide">September 2015 – August 2019</span>
        </span>
      </div>
    </section>
  )
}
