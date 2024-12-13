import * as quizzesDao from "./dao.js";
import * as questionsDao from "./dao.js";

export default function QuizRoutes(app) {

  app.put("/api/quizzes/:quizId", async (req, res) => {
    const { quizId } = req.params;
    const quizUpdates = req.body;
    const status = await quizzesDao.updateQuiz(quizId, quizUpdates);
    res.send(status);
  });
 
    
    app.delete("/api/quizzes/:quizId", async (req, res) => {
      const { quizId } = req.params;
      const status = await quizzesDao.deleteQuiz(quizId);
      res.send(status);
    });
   

//find all Questions
app.get("/api/quizzes/:quizId/questions", async (req, res) => {
  const { quizId } = req.params;
  const questions = await questionsDao.findQuestionsForQuiz(quizId);
  res.json(questions);
});
 
}
