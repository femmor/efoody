const category = require('../models/Category');

exports.create = (req, res) => {
  console.log(req.user);

  setTimeout(() => {
    res.json({
      successMessage: `${req.body.category} category created successfully!`,
    });
  }, 5000);
};
