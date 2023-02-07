import React, { useState } from "react";

const ReadMore = ({ text, maxLength = 100 }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      {showMore ? text : text.slice(0, maxLength)}
      {!showMore && text.length > maxLength && (
        <button onClick={() => setShowMore(true)}>Read More</button>
      )}
    </>
  );
};

export default ReadMore;
