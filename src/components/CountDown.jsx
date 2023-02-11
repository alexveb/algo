// import { useState, useEffect } from "react";

// function Checkbox() {
//   const [isChecked, setIsChecked] = useState(false);
//   const [countdown, setCountdown] = useState(null);

//   const handleCheckboxChange = (e) => {
//     setIsChecked(e.target.checked);
//     if (e.target.checked) {
//       setCountdown(365 * 24 * 60 * 60); // countdown in seconds
//     } else {
//       setCountdown(null);
//     }
//   };

//   useEffect(() => {
//     if (countdown !== null) {
//       const interval = setInterval(() => {
//         setCountdown(countdown - 1);
//       }, 1000); // 1 second in milliseconds
//       return () => clearInterval(interval);
//     }
//   }, [countdown]);

//   useEffect(() => {
//     if (countdown === 0) {
//       setIsChecked(false);
//     }
//   }, [countdown]);

//   const formatCountdown = (countdown) => {
//     const days = Math.floor(countdown / (24 * 60 * 60));
//     const hours = Math.floor((countdown % (24 * 60 * 60)) / (60 * 60));
//     const minutes = Math.floor((countdown % (60 * 60)) / 60);
//     const seconds = Math.floor(countdown % 60);
//     return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
//   };

//   return (
//     <div>
//       <label>
//         <input
//           type="checkbox"
//           checked={isChecked}
//           onChange={handleCheckboxChange}
//         />
//         Check me for 1 year!
//       </label>
//       {countdown !== null && (
//         <h3>Time remaining: {formatCountdown(countdown)}</h3>
//       )}
//     </div>
//   );
// }

// export default Checkbox;

// import { useState, useEffect } from "react";

// function Checkbox() {
//   const [isChecked, setIsChecked] = useState(false);
//   const [countdown, setCountdown] = useState(null);

//   const handleCheckboxChange = (e) => {
//     setIsChecked(e.target.checked);
//     if (e.target.checked) {
//       setCountdown(10); // countdown in seconds
//     } else {
//       setCountdown(null);
//     }
//   };

//   useEffect(() => {
//     if (countdown !== null) {
//       const interval = setInterval(() => {
//         setCountdown((countdown) => Math.max(countdown - 1, 0));
//       }, 1000); // 1 second in milliseconds
//       return () => clearInterval(interval);
//     }
//   }, [countdown]);

//   useEffect(() => {
//     if (countdown === 0) {
//       setIsChecked(false);
//     }
//   }, [countdown]);

//   return (
//     <div>
//       <label>
//         <input
//           type="checkbox"
//           checked={isChecked}
//           onChange={handleCheckboxChange}
//         />
//         Check me for 1 minute!
//       </label>
//       {countdown !== null && <h3>Time remaining: {countdown} seconds</h3>}
//     </div>
//   );
// }

// export default Checkbox;

// import { useState, useEffect } from "react";

// function Checkbox() {
//   const [isChecked, setIsChecked] = useState(false);
//   const [countdown, setCountdown] = useState(null);

//   const handleCheckboxChange = (e) => {
//     setIsChecked(e.target.checked);
//     if (e.target.checked) {
//       setCountdown(10); // countdown in seconds
//     } else {
//       setCountdown(null);
//     }
//   };

//   useEffect(() => {
//     if (countdown !== null) {
//       const interval = setInterval(() => {
//         setCountdown((countdown) => Math.max(countdown - 1, 0));
//       }, 1000); // 1 second in milliseconds
//       return () => clearInterval(interval);
//     }
//   }, [countdown]);

//   useEffect(() => {
//     if (countdown === 0) {
//       setIsChecked(false);
//     }
//   }, [countdown]);

//   return (
//     <div>
//       <label>
//         <input
//           type="checkbox"
//           checked={isChecked}
//           onChange={handleCheckboxChange}
//         />
//         Check me for 1 minute!
//       </label>
//       {countdown !== null && countdown > 0 && (
//         <h3>Time remaining: {countdown} seconds</h3>
//       )}
//       {countdown !== null && countdown === 0 && (
//         <h3>Your subscription has ended</h3>
//       )}
//     </div>
//   );
// }

// export default Checkbox;

import { useState, useEffect } from "react";

function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);
  const [countdown, setCountdown] = useState(null);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
    if (e.target.checked) {
      setCountdown(365 * 24 * 60 * 60); // countdown in seconds
    } else {
      setCountdown(null);
    }
  };

  useEffect(() => {
    if (countdown !== null) {
      const interval = setInterval(() => {
        setCountdown((countdown) => Math.max(countdown - 1, 0));
      }, 1000); // 1 second in milliseconds
      return () => clearInterval(interval);
    }
  }, [countdown]);

  useEffect(() => {
    if (countdown === 0) {
      setIsChecked(false);
    }
  }, [countdown]);

  const formatCountdown = (countdown) => {
    const days = Math.floor(countdown / (24 * 60 * 60));
    const hours = Math.floor((countdown % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((countdown % (60 * 60)) / 60);
    const seconds = Math.floor(countdown % 60);
    return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        Check me for 1 year!
      </label>
      {countdown !== null && countdown > 0 && (
        <h3>Time remaining: {formatCountdown(countdown)}</h3>
      )}
      {countdown !== null && countdown === 0 && (
        <h3>Your subscription has ended</h3>
      )}
    </div>
  );
}

export default Checkbox;
