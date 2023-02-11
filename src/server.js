// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const app = express();
// app.use(express.json());
// app.use(cors());

// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true, unique: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// });

// userSchema.index({ email: 1 }, { unique: true });

// const User = mongoose.model("User", userSchema);

// app.post("/users", async (req, res) => {
//   try {
//     const user = new User({
//       username: req.body.username,
//       email: req.body.email,
//       password: req.body.password,
//     });
//     await user.save();
//     res.status(201).json({ message: "User created successfully" });
//   } catch (error) {
//     if (error.name === "MongoError" && error.code === 11000) {
//       res.status(400).json({ error: "Username or email already exists" });
//     } else {
//       res.status(400).json({ error: error.message });
//     }
//   }
// });

// app.post("/login", async (req, res) => {
//   try {
//     const user = await User.findOne({ email: req.body.email });
//     if (!user) {
//       res.status(401).json({ error: "Email or password is incorrect" });
//     } else if (user.password !== req.body.password) {
//       res.status(401).json({ error: "Email or password is incorrect" });
//     } else {
//       res.status(200).json({ message: "Login successful" });
//       res.redirect("/Education");
//     }
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// mongoose
//   .connect(
//     "mongodb+srv://alexveb:Linageorge1!@cluster0.p8cqmqg.mongodb.net/Users",
//     { useNewUrlParser: true }
//   )
//   .then(() => {
//     app.listen(3001, () => {
//       console.log("Server started on http://localhost:3001");
//     });
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// app.use(cors({ origin: "http://localhost:3000" }));

// 2nd option

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const jwt = require("jsonwebtoken");

// const app = express();
// app.use(express.json());
// app.use(cors());

// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true, unique: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// });

// userSchema.index({ email: 1 }, { unique: true });

// const User = mongoose.model("User", userSchema);

// app.post("/users", async (req, res) => {
//   try {
//     const user = new User({
//       username: req.body.username,
//       email: req.body.email,
//       password: req.body.password,
//     });
//     await user.save();
//     res.status(201).json({ message: "User created successfully" });
//   } catch (error) {
//     if (error.name === "MongoError" && error.code === 11000) {
//       res.status(400).json({ error: "Username or email already exists" });
//     } else {
//       res.status(400).json({ error: error.message });
//     }
//   }
// });

// app.post("/login", async (req, res) => {
//   try {
//     const user = await User.findOne({ email: req.body.email });
//     if (!user) {
//       res.status(401).json({ error: "Email or password is incorrect" });
//     } else if (user.password !== req.body.password) {
//       res.status(401).json({ error: "Email or password is incorrect" });
//     } else {
//       const token = jwt.sign({ userId: user._id }, "secretKey");
//       res.status(200).json({ message: "Login successful", token });
//     }
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// app.post("/logout", (req, res) => {
//   res.status(200).json({ message: "Logout successful" });
// });

// mongoose
//   .connect(
//     "mongodb+srv://alexveb:Linageorge1!@cluster0.p8cqmqg.mongodb.net/Users",
//     { useNewUrlParser: true }
//   )
//   .then(() => {
//     app.listen(3001, () => {
//       console.log("Server started on http://localhost:3001");
//     });
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// app.use(cors({ origin: "http://localhost:3000" }));

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const jwt = require("jsonwebtoken");

// const app = express();
// app.use(express.json());
// app.use(cors());

// app.use(cors({ origin: "http://localhost:3000" }));

// // const userSchema = new mongoose.Schema({
// //   username: { type: String, required: true, unique: true },
// //   email: { type: String, required: true, unique: true },
// //   password: { type: String, required: true },
// // });

// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true, unique: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   permissions: [String],
// });

// userSchema.index({ email: 1 }, { unique: true });

// const User = mongoose.model("User", userSchema);

// app.post("/users", async (req, res) => {
//   try {
//     const user = new User({
//       username: req.body.username,
//       email: req.body.email,
//       password: req.body.password,
//     });
//     await user.save();
//     res.status(201).json({ message: "User created successfully" });
//   } catch (error) {
//     if (error.name === "MongoError" && error.code === 11000) {
//       res.status(400).json({ error: "Username or email already exists" });
//     } else {
//       res.status(400).json({ error: error.message });
//     }
//   }
// });

// app.post("/login", async (req, res) => {
//   try {
//     const user = await User.findOne({ email: req.body.email });
//     if (!user) {
//       res.status(401).json({ error: "Email or password is incorrect" });
//     } else if (user.password !== req.body.password) {
//       res.status(401).json({ error: "Email or password is incorrect" });
//     } else {
//       const token = jwt.sign({ userId: user._id }, "secretKey");
//       res
//         .status(200)
//         .json({ message: "Login successful", token, username: user.username });
//     }
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// app.post("/logout", (req, res) => {
//   res.status(200).json({ message: "Logout successful" });
// });

// app.patch("/users/:id", async (req, res) => {
//   try {
//     const user = await User.findByIdAndUpdate(
//       req.params.id,
//       { $set: { permissions: req.body.permissions } },
//       { new: true }
//     );
//     if (!user) {
//       res.status(404).json({ error: "User not found" });
//     } else {
//       res.status(200).json({ message: "Permissions updated successfully" });
//     }
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// mongoose
//   .connect(
//     "mongodb+srv://alexveb:Linageorge1!@cluster0.p8cqmqg.mongodb.net/Users",
//     { useNewUrlParser: true }
//   )
//   .then(() => {
//     app.listen(3001, () => {
//       console.log("Server started on http://localhost:3001");
//     });
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// app.use(cors({ origin: "http://localhost:3000" }));

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const jwt = require("jsonwebtoken");

// const app = express();
// app.use(express.json());
// app.use(cors());

// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true, unique: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   permissions: [String],
// });

// userSchema.index({ email: 1 }, { unique: true });

// const User = mongoose.model("User", userSchema);

// app.post("/users", async (req, res) => {
//   try {
//     const user = new User({
//       username: req.body.username,
//       email: req.body.email,
//       password: req.body.password,
//     });
//     await user.save();
//     res.status(201).json({ message: "User created successfully" });
//   } catch (error) {
//     if (error.name === "MongoError" && error.code === 11000) {
//       res.status(400).json({ error: "Username or email already exists" });
//     } else {
//       res.status(400).json({ error: error.message });
//     }
//   }
// });

// app.post("/login", async (req, res) => {
//   try {
//     const user = await User.findOne({ email: req.body.email });
//     if (!user) {
//       res.status(401).json({ error: "Email or password is incorrect" });
//     } else if (user.password !== req.body.password) {
//       res.status(401).json({ error: "Email or password is incorrect" });
//     } else {
//       const token = jwt.sign({ userId: user._id }, "secretKey");
//       res
//         .status(200)
//         .json({ message: "Login successful", token, username: user.username });
//     }
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// app.post("/logout", (req, res) => {
//   res.status(200).json({ message: "Logout successful" });
// });

// app.patch("/users/:id", async (req, res) => {
//   try {
//     const user = await User.findByIdAndUpdate(
//       req.params.id,
//       { $set: { permissions: req.body.permissions } },
//       { new: true }
//     );
//     if (!user) {
//       res.status(404).json({ error: "User not found" });
//     } else {
//       res.status(200).json({ message: "Permissions updated successfully" });
//     }
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// app.get("/users", async (req, res) => {
//   try {
//     const users = await User.find({});
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// app.get("/admin-panel", async (req, res) => {
//   try {
//     const token = req.header("Authorization").replace("Bearer ", "");
//     const decoded = jwt.verify(token, "secretKey");
//     const user = await User.findById(decoded.userId);
//     if (!user) {
//       throw new Error();
//     }
//     if (user.username !== "admin") {
//       res
//         .status(401)
//         .json({ error: "You are not authorized to access this page" });
//     } else {
//       const users = await User.find({});
//       res.status(200).json({ users });
//     }
//   } catch (error) {
//     res
//       .status(401)
//       .json({ error: "You are not authorized to access this page" });
//   }
// });

// mongoose
//   .connect(
//     "mongodb+srv://alexveb:Linageorge1!@cluster0.p8cqmqg.mongodb.net/Users",
//     { useNewUrlParser: true }
//   )
//   .then(() => {
//     app.listen(3001, () => {
//       console.log("Server started on http://localhost:3001");
//     });
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// app.use(cors({ origin: "http://localhost:3000" }));

// Last Version

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
app.use(cors());

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  permissions: [String],
});

userSchema.index({ email: 1 }, { unique: true });

const User = mongoose.model("User", userSchema);

app.post("/users", async (req, res) => {
  try {
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    await user.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    if (error.name === "MongoError" && error.code === 11000) {
      res.status(400).json({ error: "Username or email already exists" });
    } else {
      res.status(400).json({ error: error.message });
    }
  }
});

app.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(401).json({ error: "Email or password is incorrect" });
    } else if (user.password !== req.body.password) {
      res.status(401).json({ error: "Email or password is incorrect" });
    } else {
      const token = jwt.sign(
        { userId: user._id, username: user.username },
        "secretKey"
      );
      res.status(200).json({ message: "Login successful", token });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.post("/logout", (req, res) => {
  res.status(200).json({ message: "Logout successful" });
});

app.patch("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { $set: { permissions: req.body.permissions } },
      { new: true }
    );
    if (!user) {
      res.status(404).json({ error: "User not found" });
    } else {
      res.status(200).json({ message: "Permissions updated successfully" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/admin", async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "secretKey");
    const user = await User.findById(decodedToken.userId);
    if (!user) {
      res.status(401).json({ error: "Unauthorized" });
    } else if (user.username !== "admin") {
      res.status(401).json({ error: "Unauthorized" });
    } else {
      res.status(200).json({ message: "Access granted" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/AdminPanel", async (req, res) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, "secretKey");

    if (decoded.username !== "admin") {
      return res.status(401).json({ error: "Unauthorized access" });
    }

    // Serve the admin panel here
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://alexveb:Linageorge1!@cluster0.p8cqmqg.mongodb.net/Users",
    { useNewUrlParser: true }
  )
  .then(() => {
    app.listen(3001, () => {
      console.log("Server started on http://localhost:3001");
    });
  })
  .catch((error) => {
    console.error(error);
  });

app.use(cors({ origin: "http://localhost:3000" }));
