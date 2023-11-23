const userController = require("../controllers/userController");
const middleWareController = require("../controllers/middleWareController")
const { route } = require("./auth");

const router = require("express").Router();

//get all users
router.get("/", middleWareController.verifyToken, userController.getAllUser)

//delete user
router.delete("/:id",middleWareController.verifyTokenAndUserAuthorization,userController.deleteUser)

module.exports = router