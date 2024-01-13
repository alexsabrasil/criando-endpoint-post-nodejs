// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

const tasks = [];

app.get('/', (req, res) => {
  res.json({ message: 'Olá, Mundo!' });
});

// Endpoint para obter todas as tarefas
app.get('/tasks', (req, res) => {
  res.json({ tasks });
});

// Endpoint para adicionar uma nova tarefa
app.post('/tasks', (req, res) => {
  const newTask = req.body.task;
  tasks.push(newTask);
  res.json({ message: 'Tarefa adicionada com sucesso!', tasks });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
