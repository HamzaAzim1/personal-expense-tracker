const bcrypt = require("bcrypt");
const pool = require("../db");

exports.register = async (req, res) => {
  const { email, password, full_name } = req.body;

  const emailReg = /^(.+)@([^\.].*)\.([a-z]{2,})$/;
  if (!email || !emailReg.test(email))
    return res.status(400).json({ error: "Enter a valid email" });

  const passReg = /^[a-zA-Z]\w{7,15}$/;
  if (!password || !passReg.test(password))
    return res.status(400).json({ error: "Password must be 8-16 characters and start with a letter" });

  if (!full_name || full_name.trim().length === 0)
    return res.status(400).json({ error: "Please enter your name" });

  try {
    const [existing] = await pool.query("SELECT user_id FROM users WHERE email = ?", [email]);
    if (existing.length > 0)
      return res.status(400).json({ error: "Email already registered" });

    const hash = await bcrypt.hash(password, 10);
    await pool.query("INSERT INTO users (email, password_hash, full_name) VALUES (?, ?, ?)", [email, hash, full_name.trim()]);
    res.status(201).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ error: "Email and password are required" });

  try {
    const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
    if (rows.length === 0)
      return res.status(401).json({ error: "Invalid email or password" });

    const user = rows[0];
    const match = await bcrypt.compare(password, user.password_hash);
    if (!match)
      return res.status(401).json({ error: "Invalid email or password" });

    req.session.user = { id: user.user_id, email: user.email, name: user.full_name };
    res.json({ success: true, name: user.full_name });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.logout = (req, res) => {
  req.session.destroy();
  res.json({ success: true });
};

exports.me = async (req, res) => {
  if (!req.session.user)
    return res.status(401).json({ error: "Not logged in" });
  res.json({ name: req.session.user.name });
};