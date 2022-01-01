import Navbar from "components/navbar";
import Footer from "components/footer";
import Headlines from "components/news";

import { InferGetServerSidePropsType } from "next";
import Script from "next/script";
import Head from "next/head";

const index = ({newsObject}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>NaradNews | Home</title>
      </Head>
      <Script src="bootstrap.js"></Script>
      <Script src="https://kit.fontawesome.com/1d6a9c959f.js"></Script>
      
      <Navbar/>

      <Headlines articles={newsObject.articles}/>

      <Footer />
    </>
  );
};

export async function getServerSideProps() {
  const newsAPI = `https://newsapi.org/v2/top-headlines?country=${process.env.REGION}&apiKey=${process.env.NEWS_API_KEY}`;
  const rawNews = await fetch(newsAPI);
  const newsObject = await rawNews.json();

  return {
    props: {
      newsObject,
    },
  };
}

export default index;
