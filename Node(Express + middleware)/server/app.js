// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;

var express = require("express");
// const router= express.Router()
var app=express();
const port=8000;
var users = require("./user.json");
var about=require('./about.json')
const fs=require('fs')
var bodyParser = require('body-parser')

const { v4: uuidv4 } = require('uuid');
// var homeRoute= require('./routes/home')
// var aboutRoute = require('./routes/about') 
// var addUser = require('./routes/addUser')

var jsonParser = bodyParser.json();

var currenTime = (req,res,next) =>{
  req.requestTime=Date(Date.now()).toString()
  next();
}


// app.use('/users',homeRoute)
// app.use('/about',aboutRoute)
// app.use('add-user',addUser)
app.get('/users',(req,res)=>{
  let wholeArray = Object.keys(users).map(key => users[key]);
  res.send(JSON.stringify(wholeArray))
})

app.post('/add-user',jsonParser,currenTime,(req,res)=>{
  let data={
    id:uuidv4(),
    time:req.requestTime,
    ...req.body
  };
  let key=users.length;
  let newUsers={
    data,
    ...users
  }
  let wholeArray = Object.keys(newUsers).map(key => newUsers[key]);
  fs.writeFileSync('./user.json',JSON.stringify(wholeArray));
  // console.log(newUsers);
  res.send("ok")
})

app.delete('/delete-user/:id',(req,res)=>{
  // console.log("hhhh",req.params.id);
  const newUsers=users.filter((item)=>item.id!==req.params.id)
  fs.writeFileSync('./user.json', JSON.stringify(newUsers));
  res.send(JSON.stringify(newUsers));
})

app.get('/about',(req,res)=>{
  res.send(JSON.stringify(about));
})

app.listen(port,()=>{
  console.log(`server is listening at port ${port}`)
})

