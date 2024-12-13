import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    quiz: {type: mongoose.Schema.Types.ObjectId, ref: "QuestionModel"},
    type:{
            type: String, 
            enum: ["MC", "TF", "FB"],
        },
        title: String,
        question_text: { type: String}, 
        answer: { type: [String] },
        options: { type: [String] }, 
        points: { type: Number},
       
    },

  { collection: "questions" }
);
export default questionSchema;