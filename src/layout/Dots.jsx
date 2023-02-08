import React from "react";

function Dots() {
  const spaceDots = [];
  for (let i = 0; i < 3; i++) {
    spaceDots.push(
      <div
        key={i}
        style={{
          width: 10,
          height: 10,
          borderRadius: "50%",
          backgroundColor: "gray",
          //Fix Dots to be full at center
          margin: "0 10px",
        }}
      />
    );
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "50px",
      }}
    >
      {spaceDots}
    </div>
  );
}

export default Dots;
