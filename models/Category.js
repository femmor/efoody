const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
      trim: true,
      maxLength: 50,
    },
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
