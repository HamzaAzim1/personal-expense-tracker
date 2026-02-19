// controllers/categoryController.js

exports.getAll = (req, res) => {
  // Milestone 02 stub
  res.status(200).json({
    todo: "list categories",
    sample: ["Food", "Rent", "Transport", "Entertainment", "Job"]
  });
};
