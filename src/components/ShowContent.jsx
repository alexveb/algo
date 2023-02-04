import React from 'react';

const Content = ({contentArray}) => {

  return (
    <>
      {contentArray.map(item => (
        <div className="postContent postContent-mobile" key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </>
  );
};

export default Content;