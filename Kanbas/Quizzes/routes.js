import * as quizzesDao from "./dao.js";
import * as questionsDao from "./dao.js";

export default function QuizRoutes(app) {

  app.put("/api/quizzes/:quizId", async (req, res) => {
    const { quizId } = req.params;
    const quizUpdates = req.body;
    const status = await quizzesDao.updateQuiz(quizId, quizUpdates);
    res.send(status);
  });

//find all Questions
// app.get("/api/quizzes/:quizId/questions", async (req, res) => {
//   const { quizId } = req.params;
//   const questions = await questionsDao.findQuestionsForQuiz(quizId);
//   res.json(questions);
// });
 

  app.delete("/api/quizzes/:quizId", async (req, res) => {
    const { quizId } = req.params;
    const status = await quizzesDao.deleteQuiz(quizId);
    res.send(status);
  });

  app.patch("/api/quizzes/:id/publish", async (req, res) => {
    const { id } = req.params;
    const { published } = req.body;

    try {
      const updatedQuiz = await quizzesDao.updateQuiz(id, { published });

      if (!updatedQuiz) {
        return res.status(404).json({ message: "Quiz not found" });
      }

      res.json(updatedQuiz);
    } catch (error) {
      console.error("Error updating publish status:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get("/api/quizzes/:quizId/questions", async (req, res) => {
    const {quizId} = req.params;
    const questions= await questionsDao.findAllQuestions(quizId);
    res.send(questions);
  });


}
