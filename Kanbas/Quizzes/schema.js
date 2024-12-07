import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
    quiz: {type: mongoose.Schema.Types.ObjectId, ref: "QuizModel"},
    title: String,
    description: String,
    assignedTo: String,
    quiz_type: { 
        type: String, 
        enum: ["Graded Quiz", "Practice Quiz", "Graded Survey", "Ungraded Survey"], 
        default: "Graded Quiz" 
    },
    points: { type: Number, default: 0 },
    group:  { 
        type: String, 
        enum: ["Quizzes", "Exams", "Assignments", "Project"], 
        default: "Quizzes" 
    },
    shuffle_answers: String,
    time_limit: Number,
    multiple_attempts:  String,
    show_answers: String,
    access_code: String,
    one_question: String,
    webcam: String,
    lock_questions: String,
    dueDate:  Date,
    available:  Date,
    availableUntil:  Date,

    questions:[
    {
        type:{
            type: String, 
            enum: ["MC", "TF", "FB"],
        },
        // question: { type: String}, 
        // options: { type: [String] },
        // correct_answer: { type: String }, 
        // points: { type: Number},
       
    },
],
},
  { collection: "quizzes" }
);
export default quizSchema;