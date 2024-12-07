import mongoose from "mongoose";
const quizSchema = new mongoose.Schema({
    quiz: {type: mongoose.Schema.Types.ObjectId, ref: "QuizModel"},
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
    title: String,
    description: String,
    assignedTo: String,
    quiz_type: String,
    points: String,
    group: String,
    shuffle_answers: String,
    time_limit: String,
    multiple_attempts: String,
    show_answers: String,
    access_code: String,
    one_question: String,
    webcam: String,
    lock_questions: String,
    dueDate: String,
    available: String,
    availableUntil: String,

    questions:[
    {
        type: String, 
            enum: ["MC", "TF", "FB"],
            question: String,
            options: [],
         
    },
]
},
  { collection: "quizzes" }
);
export default quizSchema;