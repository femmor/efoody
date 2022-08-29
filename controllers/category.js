exports.categoryController = (req, res) => {
  setTimeout(() => {
    res.json({
      successMessage: `${req.body.category} category created successfully!`,
    });
  }, 5000);
};
