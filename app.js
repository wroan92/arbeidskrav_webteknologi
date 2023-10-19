const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const app = express();

const blogpostsRoutes = require("./routes/blogposts");
const loginRoutes = require("./routes/loginBackend");
const path = require("path");

function ensureAuthenticated(req, res, next) {
  if (req.session.isAuthenticated) {
    return next();
  } else {
    res.redirect("/login");
  }
}

app.use(
  session({
    secret: "338E3F19B1857D711BD57E89E88DC",
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: {
      httpOnly: false,
      secure: false,
      maxAge: 2 * 60 * 60 * 1000,
    },
  })
);

app.use(bodyParser.json());
app.use(express.static("public"));

app.use("/css", express.static(path.join(__dirname, "public/css")));
app.use("/js", express.static(path.join(__dirname, "public/js")));

app.use("/api/blogposts", blogpostsRoutes);
app.use("/api/login", loginRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "login.html"));
});

app.get("/create", ensureAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, "views", "create.html"));
});

app.get("/api/isAuthenticated", (req, res) => {
  if (req.session.isAuthenticated) {
    res.json({ isAuthenticated: true });
  } else {
    res.json({ isAuthenticated: false });
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error during log out:", err);
      res.status(500).send("An error occurred when trying to log out.");
    } else {
      res.redirect("/login");
    }
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
