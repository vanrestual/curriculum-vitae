import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Container from '../components/Container';
import cv from '../cv';
import Skills from '../components/Skills';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ivan Restu Alfiansyah | Curriculum Vitae</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <Header.Container>
          <Header.WrapperTop>
            <Header.Profile name={cv.name} profession={cv.profession} />
            <Header.Contact contact={cv.contact} />
          </Header.WrapperTop>
          <Header.Description description={cv.description} />
        </Header.Container>
        <Header.Container className="mt-6 bg-blue-500 text-white print:mt-4 sm:mt-4">
          <Header.Information information={cv.infomration} />
        </Header.Container>
      </Header>

      <main>
        <Container>
          <Skills title={cv.skills.title} skills={cv.skills.skill} />
        </Container>
      </main>
      <footer>Footer</footer>
    </>
  )
}

export default Home;
