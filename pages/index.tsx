import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Container from '../components/Container';
import Content from '../components/Content';
import Skills from '../components/Skills';
import WorkExperience from '../components/WorkExperience';
import cv from '../cv';
import Education from '../components/Education';

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
        <Education title={cv.education.title} />
        {/* <section>
            <h3 className="text-lg tracking-wide font-bold text-blue-500 uppercase text-center md:text-left print:text-left mb-3">Additional Information About Me</h3>
            <ul>
              <li className="text-xs text-gray-500 leading-5">Speaks fluent English and native Indonesian.</li>
              <li className="text-xs text-gray-500 leading-5">Spends spare time to learn new web technologies.</li>
            </ul>
          </section> */}
      </Content>
      <footer></footer>
    </>
  )
}

export default Home;
