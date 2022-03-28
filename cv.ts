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
        items: ['HTML', 'CSS', 'Javascript', 'SASS', 'BootstrapCSS', 'JQuery', 'TailwindCSS', 'AlpineJS', 'CSS-in-JS', 'ReactJS', 'GatsbyJS', 'NextJS', 'React Native']
      },
      {
        title: 'Back-end Development',
        items: ['Typescript', 'Java', 'PHP', 'Code Igniter', 'Laravel', 'NodeJS', 'ExpressJS', 'MySQL']
      },
      {
        title: 'Tools, Development and Operation',
        items: ['Figma', 'Adobe XD', 'GIT', 'Apache', 'NGINX', 'CPanel', 'Docker', 'AWS', 'Digital Ocean']
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
          'Ensure the developed web application to be fast, lightweight and responsive.',
          'Create reusable and readable codes for future development.'
        ]
      },
      {
        profession: 'IT Support',
        company: 'PT. Bumi Suksesindo',
        location: 'Bondowoso, East Java, Indonesia',
        lengthOfWork: 'June 2013 – April 2015',
        descriptions: [
          'Responsible for accurately monitoring and documenting company\'s computers performance.',
          'Ensure the hardware and software being used by the company is maintained.'
        ]
      }
    ]
  },
  education: {
    title: 'Education',
    degree: 'Bachelor of Informatics Engineering',
    university: 'University of Muhammadiyah Jember',
    lengthOfEducation: 'September 2015 – August 2019',
    items: [
      'Coursework: Object Oriented Programming, Relational Database, Algorithms and Data Structure.',
      'Tech Stack: Java, HTML, CSS, Javascript, PHP, MySQL, Laravel, and Android Studio.'
    ]
  },
  footer: {
    title: 'Additional Information',
    items: [
      'Speaks native Indonesian and low intermediate English.',
      'During the COVID-19 pandemic until the end of 2021, I worked freelance as a front-end developer and handled certain websites with domains such as nikojulius.com, contentacademy.id, klikdigital.co.id, priangga.co.id, and many more.',
      'Spends spare time to learn latest full-stack technologies.',
      'I am referred by my friend, <span class="font-bold tracking-wide underline">Ilham Fadhil</span>, a Junior Programmer in Mitrais to apply to Mitrais as a ReactJS Developer.'
    ],
    link: 'https://curriculum-vitae-liart.vercel.app/',
    labelLink: 'View Online'
  }
}

export default cv;
