const User = require("../models/User")
const Product = require("../models/Product")

const userController = {
    getAllUser: async (req, res) => {
        try {
            const user = await User.find();
            res.status(200).json(user)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    deleteUser: async (req, res) => {
        try {
            const user = await User.findById(req.params.id)
            res.status(200).json('Delete sucsses')
        } catch (err) {
            res.status(500).json('Khong dc')
        }
    },
    updateUser: async (req, res) => {
        try {
            const updatedUser = await User.updateOne(
                { _id: req.params.id },
                { $set: req.body }
            );

            if (!updatedUser) {
                return res.status(404).json({ message: 'User not found' });
            }

            res.status(200).json(updatedUser);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getUser: async (req, res, next) => {
        try {
            const user = await User.findById(req.user.id)
            if (!user) return res.status(400).json({ msg: 'User does not exits' })
            res.json(user)
        } catch (error) {

            res.status(500).json({ message: 'Internal Server Error' });
        }
    },
    addToCart: async (req, res) => {
        const { productId, quantity } = req.body;
        const userId = req.user ? req.user.id : null;
      
        try {
          const user = await User.findById(userId);
      
          if (!user) {
            return res.status(404).json({ error: 'User not found' });
          }
      
          const product = await Product.findById(productId);
      
          if (!product) {
            return res.status(404).json({ error: 'Product not found' });
          }
      
          const existingProduct = user.cart.find(
            (item) => item.product.toString() === productId.toString()
          );
      
          if (existingProduct) {
            existingProduct.quantity += quantity;
            existingProduct.amount = existingProduct.quantity * existingProduct.price;
          } else {
            user.cart.push({
              product: productId,
              quantity,
              price: product.price,
              amount: product.price * quantity,
            });
          }
      
     
          user.totalAmount = user.cart.reduce((total, item) => total + item.amount, 0);
      
          await user.save();
      
          res.json({ message: 'Product added to the cart successfully.', user });
        } catch (error) {
          console.error('Error adding product to cart:', error.message);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      }
      
      








}


module.exports = userController