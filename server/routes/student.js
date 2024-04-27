const express = require('express');
const router = express.Router();
const studentController = require('./controllers/student');

router.get('/', studentController.getAllStudents);
router.post('/', studentController.createStudent);
router.put('/:id', studentController.updateStudentMarks);

module.exports = router;