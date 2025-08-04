import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
 
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>This site is just a bunch of tips from the documents of next js and self-taught things that I'm doing by myself to learn more about React.</p>
        <p>
          I'm still developing the login page, I changed the source code to the document one, I'm still a long way from finishing it! (Hope not lol)
        </p>
      </section>
    </Layout>
  );
}