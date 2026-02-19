// controllers/transactionController.js

exports.getAll = (req, res) => {
  // Milestone 02 stub
  res.status(200).json({ todo: "list transactions", query: req.query });
};

exports.create = (req, res) => {
  // Milestone 02 stub
  res.status(201).json({ todo: "create transaction", received: req.body });
};

exports.update = (req, res) => {
  // Milestone 02 stub
  res.status(200).json({ todo: "update transaction", id: req.params.id, received: req.body });
};

exports.remove = (req, res) => {
  // Milestone 02 stub
  res.status(200).json({ todo: "delete transaction", id: req.params.id });
};
