const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  id: { type: String, required: true, unique: true },
  marks: { type: Number, default: 0 },
  attendance: { type: Number, default: 0 }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;