import React, { useState } from "react";

const AddPost = () => {
  const [items, setItems] = useState([]);

  const addPost = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const title = `Title ${day}-${month}-${year}`;
    const content = `Content ${day}-${month}-${year}`;
    setItems([{ title, content }, ...items]);
  };

  return (
    <div>
      <button onClick={addPost}>Add Post</button>
      {items.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default AddPost;
