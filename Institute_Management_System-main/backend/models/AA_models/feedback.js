const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  courseID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "courses",
  },
  course_name: {
    type: String,
    required: false,
  },
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: "student",
  },
  studentPicture: {
    type: String,
    required: false,
  },
  studentName: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

//module.exports = mongoose.model('Feedbacks', feedbackSchema);

const Feedback = mongoose.model("feedbacks", feedbackSchema);

module.exports = Feedback;
