interface SkillProps {
  title: string;
  items: string[];
}

const Skill = ({ title, items }: SkillProps) => {
  return (
    <div>
      <h4 className="text-base tracking-wide font-medium text-gray-500 text-center md:text-left print:text-left mb-2">{title}</h4>
      <div className="grid gap-2 grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 print:grid-cols-7">
        {items.map((item, index) => (
          <span key={index} className="bg-blue-50 col-auto text-blue-500 px-2 py-1 inline-flex justify-center items-center text-xs rounded text-center font-medium tracking-wider">{item}</span>
        ))}
      </div>
    </div>
  )
}


const Skills = ({ title, skills }: { title: string, skills: SkillProps[] }) => {
  return (
    <section>
      <h3 className="text-lg tracking-wide font-bold text-blue-500 uppercase text-center md:text-left print:text-left mb-3">{title}</h3>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <Skill key={index} {...skill} />
        ))}
      </div>
    </section>
  )
}

export default Skills;
