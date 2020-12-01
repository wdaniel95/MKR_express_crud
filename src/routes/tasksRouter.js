const { Router } = require('express');
const tasks = Router();

const { home, getTasks, createTask, deleteTask, getTask, editTask, isAuth } = require('../controllers/tasksControllers');



tasks.get('/', home);

tasks.get('/tasks', getTasks);

tasks.get('/tasks/:id', getTask);

tasks.post('/tasks', createTask);

tasks.delete('/tasks/:id', deleteTask);

tasks.put('/tasks/:id', editTask)


module.exports = tasks;