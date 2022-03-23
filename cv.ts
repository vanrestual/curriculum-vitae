import EmailIcon from './components/icons/Email';
import GithubIcon from './components/icons/Github';
import MapMarkerIcon from './components/icons/MapMarker';
import WhatsappIcon from './components/icons/Whatsapp';

const cv = {
  name: 'Ivan Restu Alfiansyah',
  profession: 'Front-end Developer',
  contact: [
    {
      href: 'mailto:vanrestual@gmail.com',
      icon: EmailIcon,
      label: 'vanrestual@gmail.com',
    },
    {
      href: 'https://api.whatsapp.com/send?phone=+6289515756333',
      icon: WhatsappIcon,
      label: '+62-8951-5756-333',
    }
  ],
  description: 'Profesional Front-end Developer with more than four years of experience in the application development process. Have a solid foundation of object-oriented programming. Demonstrated ability to learn new stack technologies quickly. Collaborative team member who experiences dynamic team environment that utilizes agile methodology approach and able to work well under pressure.',
  information: [
    {
      href: 'https://goo.gl/maps/AQJmLd5hsPuyNsLK6',
      icon: MapMarkerIcon,
      label: 'RT. 002 / RW.003, Tembokrejo, Muncar, Banyuwangi, East Java, Indonesia',
    },
    {
      href: 'https://github.com/vanrestual',
      icon: GithubIcon,
      label: 'github.com/vanrestual',
    }
  ],
  skills: {
    title: 'Skills',
    skill: [
      {
        title: 'Front-end Development',
        items: ['HTML', 'CSS', 'Javascript', 'Typescript', 'SASS', 'Bootstrap', 'JQuery', 'TailwindCSS', 'AlpineJS', 'CSS-in-JS', 'ReactJS', 'GatsbyJS', 'NextJS', 'React Native']
      },
      {
        title: 'Back-end Development',
        items: ['Java', 'PHP', 'Code Igniter', 'Laravel', 'NodeJS', 'ExpressJS', 'MySQL']
      },
      {
        title: 'Tools, Development and Operation',
        items: ['Figma', 'Adobe XD', 'GIT', 'Apache', 'NGINX', 'Docker', 'AWS', 'Digital Ocean']
      }
    ]
  },
  workExperience: {
    title: 'Work Experience',
    works: [
      {
        profession: 'Front-end Developer',
        company: 'PT. Aktif Teknologi Indonesia',
        location: 'Jember, East Java, Indonesia',
        lengthOfWork: 'November 2018 – October 2019',
        descriptions: [
          'Create an interesting website or app view.',
          'Ensuring the website or application created can run quickly and responsively.',
          'Create code that can be used again for future purposes.'
        ]
      },
      {
        profession: 'IT Support',
        company: 'PT. Bumi Suksesindo',
        location: 'Bondowoso, East Java, Indonesia',
        lengthOfWork: 'June 2013 – April 2015',
        descriptions: [
          'Responsible for checking computers, starting from the operating system to applications.',
          'Ensuring hardware and software can run properly.'
        ]
      }
    ]
  },
  projects: {
    title: 'Projects',
  },
  education: {
    title: 'Education',
    lengthOfEducation: 'September 2015 – August 2019',
  }
}

export default cv;
