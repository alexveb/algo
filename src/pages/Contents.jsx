import React, { useState } from "react";
import { Link } from "react-router-dom";

const ReadMore = ({ text, maxLength = 100, id }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      {showMore ? text : text.slice(0, maxLength)}
      {!showMore && text.length > maxLength && (
        <Link to={`/article/${id}`}>
          <button onClick={() => setShowMore(true)}>Read More</button>
        </Link>
      )}
    </>
  );
};

const Home = () => {
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "Article 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: new Date(),
    },
  ]);

  const addArticle = (title, text) => {
    setArticles([
      ...articles,
      {
        id: articles.length + 1,
        title,
        text,
        date: new Date(),
      },
    ]);
  };

  return (
    <>
      {articles.map(({ title, text, id, date }) => (
        <>
          <h2>{title}</h2>
          <p>{date.toDateString()}</p>
          <ReadMore text={text} id={id} />
        </>
      ))}
      <button
        onClick={() =>
          addArticle(
            "Article 2",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          )
        }
      >
        Add Article
      </button>
    </>
  );
};

export default Home;
