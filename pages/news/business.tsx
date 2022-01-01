import Navbar from "components/navbar";
import Footer from "components/footer";
import Business from "components/news";

import { InferGetServerSidePropsType } from "next";
import Head from "next/head";

const business = ({newsObject}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
      <Head>
        <title>NaradNews | Business</title>
      </Head>

      <Navbar />
      <Business articles={newsObject.articles}/>
      <Footer />
    </div>
  );
};

export async function getServerSideProps() {
  const newsAPI = `https://newsapi.org/v2/top-headlines?country=${process.env.REGION}&category=business&apiKey=${process.env.NEWS_API_KEY}`;
  const rawNews = await fetch(newsAPI);
  const newsObject = await rawNews.json();

  return {
    props: {
      newsObject,
    },
  };
}


export default business;
