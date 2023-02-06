import React from "react";

function Dots() {
  const spaceDots = [];
  for (let i = 0; i < 6; i++) {
    spaceDots.push(
      <div
        key={i}
        style={{
          width: 10,
          height: 10,
          borderRadius: "50%",
          backgroundColor: "gray",
          marginRight: 20,
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
