const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = Schema({
  title: String,
  c1: String,
  c2: String,
  c3: String,
  c4: String,
  c5: String,
  c6: String,
  p1: String,
  p2: String,
  p3: String,
  p4: String,
  p5: String,
  p6: String,
  p7: String,
  p8: String,
  p9: String,
  p10: String,
  p11: String,
  p12: String,
  p13: String,
  p14: String,
  p15: String,
  p16: String,
  
  
  status: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('tasks', TaskSchema);
