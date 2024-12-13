import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    quiz: {type: mongoose.Schema.Types.ObjectId, ref: "QuestionModel"},
    type:{
            type: String, 
            enum: ["MC", "TF", "FB"],
        },
        title: String,
        question: { type: String}, 
        answers: { type: [String] },
        correct_answer: { type: String }, 
        points: { type: Number},
       
    },

  { collection: "questions" }
);
export default questionSchema;