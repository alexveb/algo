import React, { useState, useEffect } from 'react';

function Heading() {
    const [date, setDate] = useState(new Date());
    const currentTime = date.getHours();
    const [time, setTime] = useState(new Date());

  //   let greeting;

    const customStyle = {
        color: ""
    };

  // if (currentTime < 12) {
  //   greeting = "Καλημέρα";
  //   customStyle.color = "#eee";
  // } else if (currentTime < 18) {
  //   greeting = "Καλό Απόγευμα";
  //   customStyle.color = "green";
  // } else {
  //   greeting = "Καληνύχτα";
  //   customStyle.color = "blue";
  // }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const days = [
    "Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρη", "Πέμπτη", "Παρασκευή", "Σάββατο",
  ];

  const months = [
    'Ιανουαρίου', 'Φεβρουαρίου', 'Μαρτίου', 'Απριλίου', 'Μαίου', 'Ιουνίου',
    "Ιουλίου", "Αυγούστου", "Σεμπτεμβρίου", "Οκτωβρίου", "Νοεμβρίου", "Δεκεμβρίου",
  ];

  const day = days[date.getDay()];
  const dayNumber = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return (
    <div>
        <p className="clock heading heading-mobile" style={customStyle}>{day}, {dayNumber} {month} {year}</p>
        <p className="clock heading heading-mobile">Ώρα: {time.toLocaleTimeString("el-GR")}</p>
        {/* <h1 className="heading" style={customStyle}>
        {greeting} </h1>
        <p className="clock">Ώρα: {time.toLocaleTimeString()} </p> */}
    </div>
    
   
  );
}

export default Heading;
