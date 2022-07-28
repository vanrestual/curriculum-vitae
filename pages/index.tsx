import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Container from '../components/Container';
import Content from '../components/Content';
import Skills from '../components/Skills';
import WorkExperience from '../components/WorkExperience';
import Education from '../components/Education';
import Footer from '../components/Footer';
import resume from '../resume';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ivan Restu Alfiansyah | Resume</title>
        <meta name="description" content="Profesional Front-end Developer with more than four years of experience in the application development process"/>
        <link rel="icon" href="/favicon.ico" />
        <link rel='canonical' href="https://resume-zeta-seven.vercel.app/" />
      </Head>
      <Header>
        <Container>
          <Header.Identity name={resume.name} profession={resume.profession} contact={resume.contact} />
          <Header.Description description={resume.description} />
        </Container>
        <Header.Information information={resume.information} />
      </Header>
      <Content>
        <Skills title={resume.skills.title} skills={resume.skills.skill} />
        <WorkExperience title={resume.workExperience.title} works={resume.workExperience.works} />
        <Education
          title={resume.education.title}
          degree={resume.education.degree}
          university={resume.education.university}
          lengthOfEducation={resume.education.lengthOfEducation}
          items={resume.education.items}
        />
      </Content>
      <Footer
        title={resume.footer.title}
        items={resume.footer.items}
        link={resume.footer.link}
        labelLink={resume.footer.labelLink}
      />
    </>
  )
}

export default Home;
