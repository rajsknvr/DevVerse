const express = require('express');
const cors = require('cors');
const app = express();
const port = 5002;

const corsOptions = {
  origin: '*', // Allow frontend origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Allow cookies and headers
};

app.use(cors(corsOptions));
app.use(express.json());

const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
];

app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    user ? res.json(user) : res.status(404).send('User not found');
});

app.listen(port, () => console.log(`User service running on port ${port}`));
