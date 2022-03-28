import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Container from '../components/Container';
import Content from '../components/Content';
import Skills from '../components/Skills';
import WorkExperience from '../components/WorkExperience';
import Education from '../components/Education';
import Footer from '../components/Footer';
import cv from '../cv';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ivan Restu Alfiansyah | Curriculum Vitae</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <Container>
          <Header.Identity name={cv.name} profession={cv.profession} contact={cv.contact} />
          <Header.Description description={cv.description} />
        </Container>
        <Header.Information information={cv.information} />
      </Header>
      <Content>
        <Skills title={cv.skills.title} skills={cv.skills.skill} />
        <WorkExperience title={cv.workExperience.title} works={cv.workExperience.works} />
        <Education
          title={cv.education.title}
          degree={cv.education.degree}
          university={cv.education.university}
          lengthOfEducation={cv.education.lengthOfEducation}
          items={cv.education.items}
        />
      </Content>
      <Footer
        title={cv.footer.title}
        items={cv.footer.items}
        link={cv.footer.link}
        labelLink={cv.footer.labelLink}
      />
    </>
  )
}

export default Home;
