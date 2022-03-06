export default function Description({ description }: { description: string }) {
  return <p className="mt-4 print:mt-2 md:mt-2 text-xs text-gray-500 tracking-wider text-justify leading-5">{description}</p>
}