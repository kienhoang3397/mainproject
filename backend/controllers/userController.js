const User = require("../models/User");
const Product = require("../models/Product");

const userController = {
  getAllUser: async (req, res) => {
    try {
      const user = await User.find();
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  deleteUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.status(200).json("Delete sucsses");
    } catch (err) {
      res.status(500).json("Khong dc");
    }
  },
  updateUser: async (req, res) => {
    try {
      const updatedUser = await User.updateOne(
        { _id: req.params.id },
        { $set: req.body }
      );

      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }

      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getUser: async (req, res, next) => {
    try {
      const user = await User.findById(req.user.id);
      if (!user) return res.status(400).json({ msg: "User does not exits" });
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
  addToCart: async (req, res) => {
    const { productId, quantity } = req.body;
    const userId = req.user ? req.user.id : null;

    try {
      const user = await User.findById(userId);

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      // Find the product by ID
      const product = await Product.findById(productId);

      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }

      const existingProductIndex = user.cart.findIndex(
        (item) =>
          item.product && item.product.toString() === productId.toString()
      );

      if (existingProductIndex !== -1) {
        user.cart[existingProductIndex].quantity += quantity;
        user.cart[existingProductIndex].amount =
          user.cart[existingProductIndex].quantity *
          user.cart[existingProductIndex].price;
      } else {
        user.cart.push({
          product: productId,
          quantity,

          price: product.price,
          amount: product.price * quantity,
          image: product.image,
          name: product.name,
        });
      }

      user.totalAmount = user.cart.reduce(
        (total, item) => total + item.amount,
        0
      );

      await user.save();

      // Respond with success message and updated user
      res.json({ message: "Product added to the cart successfully.", user });
    } catch (error) {
      console.error("Error adding product to cart:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  removeFromCart: async (req, res) => {
    const { productId } = req.body;
    const userId = req.user ? req.user.id : null;

    try {
      const user = await User.findById(userId);

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      const existingProductIndex = user.cart.findIndex(
        (item) =>
          item.product && item.product.toString() === productId.toString()
      );

      if (existingProductIndex !== -1) {
        // Remove the product from the cart array
        user.cart.splice(existingProductIndex, 1);

        user.totalAmount = user.cart.reduce(
          (total, item) => total + item.amount,
          0
        );

        await user.save();

        // Respond with success message and updated user
        return res.json({
          message: "Product removed from the cart successfully.",
          user,
        });
      }

      // If the product is not in the cart, respond with an error message
      return res.status(404).json({ error: "Product not found in the cart" });
    } catch (error) {
      console.error("Error removing product from cart:", error.message);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  },
  decreaseQuantity: async (req, res) => {
    const { productId } = req.body;
    const userId = req.user ? req.user.id : null;

    try {
      const user = await User.findById(userId);

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      const existingProductIndex = user.cart.findIndex(
        (item) =>
          item.product && item.product.toString() === productId.toString()
      );

      if (existingProductIndex !== -1) {
        // Decrease the quantity of the product in the cart
        if (user.cart[existingProductIndex].quantity > 0) {
          user.cart[existingProductIndex].quantity -= 1;

          user.totalAmount = user.cart.reduce(
            (total, item) => total + item.amount,
            0
          );

          await user.save();

          // Respond with success message and updated user
          return res.json({
            message: "Product quantity decreased in the cart successfully.",
            user,
          });
        } else {
          // If the quantity is already zero, respond with a message
          return res
            .status(400)
            .json({ error: "Product quantity is already zero" });
        }
      }

      // If the product is not in the cart, respond with an error message
      return res.status(404).json({ error: "Product not found in the cart" });
    } catch (error) {
      console.error(
        "Error decreasing product quantity in cart:",
        error.message
      );
      return res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = userController;
