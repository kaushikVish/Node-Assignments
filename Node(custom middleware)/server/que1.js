var express = require("express");
var app = express();
const port = 8000;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
var session = require("express-session");
var cors = require("cors");

var jsonParser = bodyParser.json();

app.use(cors());
app.use(cookieParser());

app.use(
  session({
    secret: "keyboard_cat",
    resave: false,
    proxy: true,
    saveUninitialized: true,
    cookie: { httpOnly: true, maxAge: 360000 },
  })
);

app.get("/authentication", (req, res) => {
  if (req.session.authentication) {
    res.send(JSON.stringify({ isLogin: true }));
  } else {
    res.send(JSON.stringify({ isLogin: false }));
  }
});

app.get("/login", jsonParser, (req, res) => {
  req.session.authentication = 1;
  req.session.save();
  res.status(200).send("login successfully");
});

app.get("/logout", (req, res) => {
  req.session.destroy(function (err) {
    if (err) {
      res.send("err");
    } else {
      res.send("logout successfully");
    }
  });
});

app.get("/dashboard", (req, res) => {
  if (req.session.userId) {
    res.send("hello");
  } else {
    res.send("Bye");
  }
});

app.listen(port, () => {
  console.log(`server is listening at ${port}`);
});
