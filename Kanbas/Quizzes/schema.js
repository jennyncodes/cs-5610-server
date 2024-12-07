import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
    title: { type: String, required: true },
    quiz: {type: mongoose.Schema.Types.ObjectId, ref: "QuizModel"},
   
    description: { type: String, required: true },
    assignedTo: String,
    quiz_type: { 
        type: String, 
        enum: ["Graded Quiz", "Practice Quiz", "Graded Survey", "Ungraded Survey"], 
        default: "Graded Quiz" 
      },
    points: { type: Number, required: true, default: 0 },
    group:  { 
        type: String, 
        enum: ["Quizzes", "Exams", "Assignments", "Project"], 
        default: "Quizzes" 
      },
    shuffle_answers: { type: Boolean, default: true },
    time_limit: { type: Number, default: 20 },
    multiple_attempts:  { type: Boolean, default: false },
    show_answers: String,
    access_code: String,
    one_question: { type: Boolean, default: true },
    webcam: { type: Boolean, default: false },
    lock_questions: { type: Boolean, default: false },
    dueDate:  { type: Date, required: true },
    available:  { type: Date, required: true },
    availableUntil:  { type: Date, required: true },

    questions:[
    {
        type:{
            type: String, 
            enum: ["MC", "TF", "FB"],
            required: true
        },
        question: { type: String, required: true }, 
        options: { type: [String], required: true },
        correct_answer: { type: String }, 
        points: { type: Number, required: true },
       
    },
],
},
  { collection: "quizzes" }
);
export default quizSchema;