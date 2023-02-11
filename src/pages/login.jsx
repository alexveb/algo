// import React, { useState } from "react";
// import axios from "axios";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:3001/login", {
//         email,
//         password,
//       });
//       setMessage(response.data.message);
//     } catch (error) {
//       setMessage(error.response.data.error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(event) => setEmail(event.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={(event) => setPassword(event.target.value)}
//         />
//       </div>
//       <button type="submit">Login</button>
//       <p>{message}</p>
//     </form>
//   );
// };

// export default Login;

// import React, { useState } from "react";
// import axios from "axios";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:3001/login", {
//         email,
//         password,
//       });
//       if (response.data.message === "Login successful") {
//         window.location.href = "/Education";
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(event) => setEmail(event.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={(event) => setPassword(event.target.value)}
//         />
//       </div>
//       <button type="submit">Login</button>
//       <p>{message}</p>
//     </form>
//   );
// };

// export default Login;

import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/login", {
        email,
        password,
      });
      if (response.data.message === "Login successful") {
        window.location.href = "/AdminPanel";
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      setMessage(error.response.data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? "Hide" : "Show"} Password
        </button>
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
