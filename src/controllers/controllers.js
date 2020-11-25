const Task = require('../models/models');
const tasks = require('../routes/routes');

const home = (req, res) => {
  res.render('home');
}

const getTasks = async (req, res) => {
  const tasks = await Task.find().lean();
  console.log(tasks)
  res.render('tasksView', { tasks })
}

const createTask = async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.redirect('/tasks');
}


const deleteTask = async (req, res) => {
  const { id } = req.params
  await Task.findByIdAndDelete(id)
  res.redirect('/tasks');
}

// TODO: List one task - edit One task -  change status

module.exports = {
  home, getTasks, createTask, deleteTask
}