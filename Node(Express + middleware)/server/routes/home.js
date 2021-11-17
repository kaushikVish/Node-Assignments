var express = require("express");
var router = express.Router();

/* GET home page. */

router.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

router.get("/", (req,res)=> {
  res.send("users");
});

module.exports = router;
