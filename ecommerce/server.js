const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname, 'public/images')));
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mohole2002', // your MySQL password
  database: 'eccomers'    // your DB name
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to database');
});

// 🔐 Login API
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM login WHERE email = ? AND password = ?';

  db.query(sql, [email, password], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'DB Error' });
    }

    if (results.length > 0) {
      res.json({ success: true });
    } else {
      res.json({ success: false, message: 'Invalid email or password' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
