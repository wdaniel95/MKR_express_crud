const Task = require('../models/models');
const tasks = require('../routes/routes');

const home = (req, res) => {
  res.render('home');
}

const getTasks = async (req, res) => {
  const tasks = await Task.find().lean();
  res.render('tasksView', { tasks });
}

const createTask = async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.redirect('/tasks');
}


const deleteTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.redirect('/tasks');
}

const getTask = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  res.render('editForm', task);
}


const editTask = async (req, res) => {
  const { title, description } = req.body
  const { id } = req.params;
  await Task.findByIdAndUpdate(id, { title, description });
  res.redirect('/tasks');
}


module.exports = {

  home, getTasks, createTask, deleteTask, getTask, editTask
}