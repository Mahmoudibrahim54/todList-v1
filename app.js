const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();

const items = ["buy Food"];
const workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){

  const currentDay = date.getDate();
res.render("list", {listName: currentDay, newItems: items});
});


app.get("/work", function(req, res){

  res.render("list", {listName: "Work", newItems: workItems});

});
app.get("/about", function(req, res){

  res.render("about");

});


app.post("/", function(req, res){
  let item = req.body.newTask;

  if(req.body.list === "Work"){
      workItems.push(item);
      res.redirect("/work");
  }else{
  items.push(item);
  res.redirect("/");
}
});


app.listen(3000, function(req, res){
  console.log("server is up on port 3000");
});
