import CalendarIcon from './icons/Calendar';
import CheckIcon from './icons/Check';
import MapMarkerIcon from './icons/MapMarker';

interface WorkExperienceProps {
  title: string;
  works: {
    profession: string;
    company: string;
    location: string;
    lengthOfWork: string;
    descriptions: string[];
  }[]
}

export default function WorkExperience({ title, works }: WorkExperienceProps) {
  return (
    <section>
      <h3 className="text-base tracking-wide font-bold text-blue-500 uppercase text-center md:text-left print:text-left mb-2 sm:mb-3 md:mb-2">{title}</h3>
      <ul className="space-y-3 mb-3 md:mb-1.5 print:mb-1.5">
        {works.map((item, index) => (
          <li key={index}>
            <div className="flex w-full flex-col sm:flex-row print:flex-row justify-between space-y-1 sm:space-y-0 print:space-y-0">
              <h4 className="tracking-wide text-center sm:text-left print:text-left mb-1.5">
                <span className="block text-gray-800 font-bold text-sm mb-1">{item.profession}</span>
                <span className="block text-gray-600 font-medium text-xs">{item.company}</span>
              </h4>
              <div className="shrink-0 space-y-1.5">
                <span className="text-gray-400 flex justify-center sm:justify-end print:justify-end items-center">
                  <CalendarIcon className="h-4 w-4 mr-1.5 -mt-px" />
                  <span className="text-xs tracking-wide italic">{item.lengthOfWork}</span>
                </span>
                <span className="text-gray-400 flex justify-center sm:justify-end print:justify-end items-center">
                  <MapMarkerIcon className="h-4 w-4 mr-1.5 -mt-px" />
                  <span className="text-xs tracking-wide italic">{item.location}</span>
                </span>
              </div>
            </div>
            <div className="mt-3 sm:mt-px flex flex-col print:mt-px">
              {item.descriptions.map((description, index) => (
                <div key={index} className="text-gray-700 flex space-x-2">
                  <CheckIcon className="h-4 w-4 shrink-0" />
                  <p className="text-xs text-justify block leading-5">{description}</p>
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
