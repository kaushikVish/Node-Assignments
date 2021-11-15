var fs = require("fs");

try {
  var contents = fs.readFileSync("users.txt", "utf-8"); //Syncroniously 
  console.log(contents);
  console.log("hello node");
} catch (error) {
  console.log(error);
}

fs.readFile("users.txt", "utf-8", (err, data) => {     //Asyncronious
  if (err) {
    console.log(err);
    return;
  }

  console.log(data);
  console.log("hello node again")
});
