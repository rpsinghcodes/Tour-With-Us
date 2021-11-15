const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/booknow", (req, res) => {
  console.log(req.body);
  res.redirect("/#book");
});

app.listen(3000, () => {
  console.log("App is running on port 3000");
});
