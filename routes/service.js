const chalk = require("chalk");
const express = require("express");

const serviceController = require("../controller/service");

const router = express.Router();

router.get('/', serviceController.getCategory);
router.post("/", serviceController.postCategory);
router.delete("/:id", serviceController.deleteCategory);


module.exports = router;
