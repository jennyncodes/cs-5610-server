import model from "./model.js";

export function findQuestionsForQuiz(questionId) {
  return model.find({ question: questionId }).populate("question");
}

export function updateQuestion(questionId, questionUpdates) {
  return model.updateOne({ _id: questionId }, questionUpdates);
}

export function deleteQuestion(questionId) {
  return model.deleteOne({ _id: questionId });
}
   

export function createQuestion(question) {
 delete question._id
 return model.create(question);
}

export function findAllQuestions() {
    return model.find();
  }



  