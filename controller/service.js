const chalk = require("chalk");

const Service = require("../models/service");
exports.getCategory = (req, res, next) => {
    const Result = [];
    const Errors = [];
    async function go() {
        await Service.findAll()
            .then((result) => {
                const res = (chalk.yellow.bold.inverse(JSON.stringify(result)));
                Result.push(result);
                res.status(200).json({
                    "result": Result,
                    "errors": Errors,
                });
            })
            .catch((error) => {
                Errors.push(error);
                res.status(200).json({
                    "result": Result,
                    "errors": Errors,
                });
            });
    }
    go();
    
};

exports.postCategory = (req, res, next) => {
    const Result = [];
    const Errors = [];
    const names = req.body.name;
    const description = req.body.description;
    const major = req.body.isMajor;
    for(var i = 0; i < names.length; i++){
        Service.create({
            name: names[i],
            description: description[i],
            isMajor: major,
        })
            .then((result) => {
                Result.push(result);
            })
            .catch((error) => {
                console.log(chalk.blue.bold.inverse(error));
                Errors.push(error);
            });
    }
    
    res.status(200).json({
        result: Result,
        errors: Errors,
    });
};

exports.deleteCategory = (req, res, next) => {
    const Result = [];
    const Errors = [];
    const ID = req.params.id;
    Service.destroy({ where: { serviceID: ID } })
        .then((result) => {
            Result.push(result);
        })
        .catch((error) => {
            console.log(chalk.blue.bold.inverse(error));
            Errors.push(error);
        });
    res.status(200).json({
        result: Result,
        errors: Errors,
    });
};
