const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


var routes = require("./routes.js");
app.use("/", routes);

app.set("port", process.env.PORT || 5000);
app.listen(app.get("port"), () => console.log("Handoff listening on port 5000!"));

