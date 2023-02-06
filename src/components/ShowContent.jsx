import React from "react";

const Content = ({ contentArray }) => {
  return (
    <>
      {contentArray.map((item) => (
        <div className="postContent postContent-mobile" key={item.id}>
          <h5>{item.title}</h5>
          <p>{item.description}</p>
        </div>
      ))}
    </>
  );
};

export default Content;
