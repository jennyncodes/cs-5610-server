import * as questionsDao from "./dao.js";

export default function QuestionRoutes(app) {

app.put("/api/questions/:questionId", async (req, res) => {
    const { questionId } = req.params;
    const questionUpdates = req.body;
    const status = await questionsDao.updateQuestion(questionId, questionUpdates);
    res.send(status);
  });
 
    
    app.delete("/api/questions/:questionId", async (req, res) => {
      const {questionId } = req.params;
      const status = await questionsDao.deleteQuestion(questionId);
      res.send(status);
    });

    app.post("/api/quizzes/:questionId/question", async (req, res) => {
      const { questionId } = req.params;
      const question = {...req.body, question: questionId};
      const newQuestion = await questionsDao.createQuestion(question);
      res.send(newQuestion);
    });

    app.get("/api/quizzes/:qid/questions", async (req, res) => {
      const { qid } = req.params;
      const questions = await dao.findQuestionByQuiz(qid);
      res.send(questions);
    });


}