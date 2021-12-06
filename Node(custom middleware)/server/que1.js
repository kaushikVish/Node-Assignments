var express = require("express");
var app = express();
const port = 8000;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
var session = require("express-session");
var cors = require("cors");

var jsonParser = bodyParser.json();

var corsOptions = {
  origin: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
  // Access-Control-Allow-Credentials: true
};

// app.use(cors());
app.use(cookieParser());

app.use(
  session({
    secret: "keyboard_cat",
    resave: false,
    // proxy: true,
    saveUninitialized: false,
    // cookie: { httpOnly: true, maxAge: 360000 },
  })
);

app.get("/authentication", (req, res) => {
  if (req.session.authentication) {
    res.send(JSON.stringify({ isLogin: true }));
  } else {
    res.send(JSON.stringify({ isLogin: false }));
  }
});

app.get("/login", (req, res) => {
  req.session.isAuth = true;
  req.session.save();
  // res.setHeader={
  //               // Authorization: `Bearer ${currentUser.webSessionToken}`,
  //               "Access-Control-Allow-Origin": '*',
  //               "Access-Control-Allow-Credentials": 'true',
  //             }
  //   .writeHead(200,{
  //     "Set-Cookie": req.session.isAuth,
  //     "Access-Control-Allow-Credentials": true
  //   })
  res.cookie("cookiename", "heelloo world ", {
    expires: new Date(Date.now() + 9999999999),
    httpOnly: true,
    domain: "localhost:3000",
    // path: "/dashboard",
  });
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
