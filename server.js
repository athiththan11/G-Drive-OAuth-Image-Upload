"use strict";

var path = require("path"),
    bodyParser = require("body-parser"),
    express = require("express"),
    session = require("express-session"),
    morgan = require("morgan");

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));
app.set("/view", path.join(__dirname, "/public/view"));
app.use("/node", express.static(__dirname + "/node_modules"));

// session
app.use(
    session({
        secret: "notasecret",
        resave: true,
        saveUninitialized: true
    })
);

// drive authentication and upload api
var driveApi = require("./api/drive.api");
app.use("/api/drive", driveApi);

app.use("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

// server start
app.listen(port, function(err) {
    if (err) {
        console.error(err);
        return;
    }

    console.log("Server running on port " + port);
});
