const pool = require("../db");

exports.getAll = async (req, res) => {
  try {
    const [rows] = await pool.query(
      `SELECT t.transaction_id, t.type, t.amount, t.description,
              t.transaction_date, c.name AS category
       FROM transactions t
       JOIN categories c ON t.category_id = c.category_id
       WHERE t.user_id = 1
       ORDER BY t.transaction_date DESC`
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const { type, amount, description, transaction_date, category } = req.body;

    // Get or create category
    let [cats] = await pool.query("SELECT category_id FROM categories WHERE name = ?", [category]);
    if (cats.length === 0) {
      const [result] = await pool.query("INSERT INTO categories (name) VALUES (?)", [category]);
      cats = [{ category_id: result.insertId }];
    }
    const category_id = cats[0].category_id;

    const [result] = await pool.query(
      `INSERT INTO transactions (user_id, category_id, type, amount, description, transaction_date)
       VALUES (1, ?, ?, ?, ?, ?)`,
      [category_id, type, amount, description, transaction_date]
    );
    res.status(201).json({ transaction_id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const { type, amount, description, transaction_date, category } = req.body;
    const { id } = req.params;

    let [cats] = await pool.query("SELECT category_id FROM categories WHERE name = ?", [category]);
    if (cats.length === 0) {
      const [result] = await pool.query("INSERT INTO categories (name) VALUES (?)", [category]);
      cats = [{ category_id: result.insertId }];
    }
    const category_id = cats[0].category_id;

    await pool.query(
      `UPDATE transactions SET type=?, amount=?, description=?, transaction_date=?, category_id=?
       WHERE transaction_id=? AND user_id=1`,
      [type, amount, description, transaction_date, category_id, id]
    );
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    await pool.query(
      "DELETE FROM transactions WHERE transaction_id = ? AND user_id = 1",
      [req.params.id]
    );
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOne = async (req, res) => {
  try {
    const [rows] = await pool.query(
      `SELECT t.transaction_id, t.type, t.amount, t.description,
              t.transaction_date, c.name AS category
       FROM transactions t
       JOIN categories c ON t.category_id = c.category_id
       WHERE t.transaction_id = ? AND t.user_id = 1`,
      [req.params.id]
    );
    if (rows.length === 0) return res.status(404).json({ error: "Not found" });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};