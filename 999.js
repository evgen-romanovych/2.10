const express = require('express');
const router = express.Router();

let users = [
  { id: 1, name: 'Користувач 1' },
  { id: 2, name: 'Користувач 2' },
  { id: 3, name: 'Користувач 3' }
];

router.get('/', (req, res) => {
  res.json(users);
});

router.post('/', (req, res) => {
  const { name } = req.body;
  const newUser = { id: users.length + 1, name };
  users.push(newUser);
  res.status(201).json(newUser);
});

router.delete('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.filter(user => user.id !== userId);
  res.sendStatus(204);
});

router.patch('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const { name } = req.body;
  users = users.map(user => (user.id === userId ? { ...user, name } : user));
  res.json(users.find(user => user.id === userId));
});

module.exports = router;