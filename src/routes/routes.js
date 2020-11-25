const { Router } = require('express');
const tasks = Router();

const { home, getTasks, createTask, deleteTask } = require('../controllers/controllers');



tasks.get('/', home);

tasks.get('/tasks', getTasks);

tasks.post('/tasks', createTask);

tasks.delete('/tasks/:id', deleteTask);


module.exports = tasks;