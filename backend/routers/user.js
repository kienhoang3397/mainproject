const userController = require("../controllers/userController");
const middleWareController = require("../controllers/middleWareController")
const { route } = require("./auth");

const router = require("express").Router();

//get all users
router.get("/", middleWareController.verifyToken, userController.getAllUser)

//delete user
router.delete("/:id", middleWareController.verifyTokenAndUserAuthorization, userController.deleteUser)

router.get('/info', middleWareController.verifyToken, userController.getUser)
// router.post('/addcart', middleWareController.auth, userController.addCart)

router.put("/:id", userController.updateUser)
router.post('/add-to-cart', middleWareController.verifyToken, userController.addToCart);

module.exports = router