const Product = require('../models/Product');

exports.create = async (req, res) => {
  const {
    productName,
    productDesc,
    productPrice,
    productCategory,
    productQty,
  } = req.body;

  const { filename } = req.file;

  try {
    let product = new Product();
    product.filename = filename;
    product.productName = productName;
    product.productDesc = productDesc;
    product.productPrice = productPrice;
    product.productCategory = productCategory;
    product.productQty = productQty;

    await product.save();
    res.status(200).json({
      successMessage: `${productName} created successfully!`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      errorMessage: 'Please try again later!',
    });
  }
};
