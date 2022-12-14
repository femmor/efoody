const Category = require('../models/Category');

exports.create = async (req, res) => {
  const { category } = req.body;

  try {
    const categoryExists = await Category.findOne({ category });

    if (categoryExists) {
      res
        .status(400)
        .json({ errorMessage: `${category} category already exists` });
    } else {
      let newCategory = new Category();

      newCategory.category = category;

      newCategory = await newCategory.save();

      res.status(200).json({
        successMessage: `${newCategory.category} was successfully created!`,
      });
    }
  } catch (error) {
    console.log('create category error: ', error);
    res.status(500).json({ errorMessage: 'Please try again later.' });
  }
};

exports.readAll = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.status(200).json({ categories });
  } catch (error) {
    console.log('read all categories error: ', error);
    res.status(500).json({ errorMessage: 'Please try again later.' });
  }
};
