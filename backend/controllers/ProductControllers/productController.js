const Product = require("../../models/Product");

const productController = {
  getAllProduct: async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  createProduct: async (req, res) => {
    try {
      const newProduct = new Product({
        qnty: req.body.qnty,
        image: req.body.image,
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock,
        discount: req.body.discount,
        category: req.body.category,
      });

      const product = await newProduct.save();
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  updateProduct: async (req, res) => {
    try {
      const updatedProduct = await Product.updateOne(
          {_id: req.params.id},
          {$set: req.body}
      );

      if (!updatedProduct) {
        return res.status(404).json({ message: 'Product not found' });
      }

      res.status(200).json(updatedProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  },

   getSingleProduct: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ message: 'Product not found' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  deleteProduct: async (req, res) => {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.status(200).json({ message: "Delete success" });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = productController;
