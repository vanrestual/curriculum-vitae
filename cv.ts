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
      href: 'https://api.whatsapp.com/send?phone=+6281234567890',
      icon: WhatsappIcon,
      label: '+62-8123-4567-890',
    }
  ],
  description: 'Profesional Front-end Developer with more than four years of experience in the application development process. Have a solid foundation of object-oriented programming. Demonstrated ability to learn new stack technologies quickly. Collaborative team member who experiences dynamic team environment that utilizes agile methodology approach and able to work well under pressure.',
  infomration: [
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
        items: ['Coreldraw', 'Figma', 'Adobe XD', 'Photoshop', 'GIT', 'Apache', 'NGINX', 'Docker', 'AWS', 'DigitalOcean', 'Vercel']
      },
    ]
  }
}

export default cv;
