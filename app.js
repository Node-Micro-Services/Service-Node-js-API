const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const chalk = require("chalk");

const sequelize = require("./util/database");

const Service = require("./models/service");
const ServiceRoute = require("./routes/service");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("<H1>Working Service Services</H1>");
});

app.use("/extra-services", ServiceRoute);

sequelize
    // .sync({force: true})  ---> to overwrite the tables better say format all...
    .sync()
    .then((result) => {
        // console.log(result);
        app.listen(8080, () => {
            console.log(chalk.red.inverse.bold("SERVER IS LIVE AT PORT 8080"));
        });
    })
    .catch((error) => {
        console.log(error);
    });
