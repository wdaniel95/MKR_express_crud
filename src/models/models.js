const { Schema, model } = require('mongoose');

const TaskSchema = new Schema({
  title: String,
  description: String,
  status: {
    type: Boolean,
    default: false
  }
});

module.exports = model('Task', TaskSchema);