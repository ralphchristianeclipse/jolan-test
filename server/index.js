const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const Sequelize = require('sequelize');
const sequelize = new Sequelize('test_1', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

const PORT = 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/users', async (req, res) => {
  const users = await sequelize.query('SELECT * FROM users', {
    type: Sequelize.QueryTypes.SELECT
  });
  res.json(users);
});
app.post('/users', async (req, res) => {
  const query =
    'INSERT INTO users(first_name, last_name, age, email, password, contact) VALUES (:first_name, :last_name, :age, :email, :password, :contact)';
  const results = await sequelize.query(query, {
    type: Sequelize.QueryTypes.INSERT,
    replacements: req.body
  });
  res.json(results);
});
app.delete('/users/:id', async (req, res) => {
  const query = 'DELETE FROM users WHERE id = :id';
  const results = await sequelize.query(query, {
    type: Sequelize.QueryTypes.INSERT,
    replacements: req.params
  });
  res.json(results);
});
app.put('/users/:id', async (req, res) => {
  const query =
    'UPDATE users SET first_name = :first_name, last_name = :last_name, age = :age, email = :email, password = :password, contact = :contact WHERE id = :id';
  const results = await sequelize.query(query, {
    type: Sequelize.QueryTypes.UPDATE,
    replacements: {
      id: req.params.id,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      age: req.body.age,
      email: req.body.email,
      password: req.body.password,
      contact: req.body.contact
    }
  });
  res.json(results);
});

app.get('/todos', async (req, res) => {
  const users = await sequelize.query('SELECT * FROM todos', {
    type: Sequelize.QueryTypes.SELECT
  });
  res.json(users);
});
app.post('/users', async (req, res) => {
  const query =
    'INSERT INTO users(first_name, last_name, age, email, password, contact) VALUES (:first_name, :last_name, :age, :email, :password, :contact)';
  const results = await sequelize.query(query, {
    type: Sequelize.QueryTypes.INSERT,
    replacements: req.body
  });
  res.json(results);
});
app.delete('/users/:id', async (req, res) => {
  const query = 'DELETE FROM users WHERE id = :id';
  const results = await sequelize.query(query, {
    type: Sequelize.QueryTypes.INSERT,
    replacements: req.params
  });
  res.json(results);
});
app.put('/users/:id', async (req, res) => {
  const query =
    'UPDATE users SET first_name = :first_name, last_name = :last_name, age = :age, email = :email, password = :password, contact = :contact WHERE id = :id';
  const results = await sequelize.query(query, {
    type: Sequelize.QueryTypes.UPDATE,
    replacements: {
      id: req.params.id,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      age: req.body.age,
      email: req.body.email,
      password: req.body.password,
      contact: req.body.contact
    }
  });
  res.json(results);
});
app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}`)
);
