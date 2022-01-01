import { NextPage } from "next";
import Link from "next/link";

interface Props {
  articles: Array<{
    source: {
      id: null;
      name: string;
    };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
  }>;
}

const news: NextPage<Props> = (props) => {
  const { articles } = props;
  return (
    <>
      <div className="container mt-2">
        {articles.map((article, index: number) => (
          <div className="card mb-3" key={index}>
            <img src={article.urlToImage} className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title text-center">{article.title}</h5>
              <p className="card-text text-center">{article.description}</p>
              <p className="card-text text-center">
                <small className="text-muted text-center"> {article.publishedAt}</small>
                <Link href={article.url}><a className="text-muted text-center nav-link" target="_blank"> Read Article</a></Link>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default news;
