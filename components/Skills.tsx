interface SkillProps {
  title: string;
  skills: {
    title: string;
    items: string[];
  }[]
}

export default function Skills({ title, skills }: SkillProps) {
  return (
    <section>
      <h3 className="text-base tracking-wide font-bold text-blue-500 uppercase text-center md:text-left print:text-left mb-2">{title}</h3>
      <ul className="space-y-6 md:space-y-3 print:space-y-3">
        {skills.map((skill, index) => (
          <li key={index}>
            <h4 className="text-sm tracking-wide font-medium text-gray-600 text-center md:text-left print:text-left mb-1.5">{skill.title}</h4>
            <div className="overflow-hidden flex flex-wrap gap-2 justify-center md:justify-start print:justify-start">
              {skill.items.map((item, index) => (
                <span key={index} className="bg-blue-50 text-blue-500 px-2 py-1 text-xs rounded text-center font-medium tracking-wider">{item}</span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
