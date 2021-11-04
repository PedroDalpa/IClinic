import { Router } from "express";
import { examsController } from "./controllers/examsController";
import { laboratoryController } from "./controllers/laboratoryController";

const routes = Router();

routes.post("/laboratory", laboratoryController.create);
routes.put("/laboratory/:id", laboratoryController.update);
routes.get("/laboratory", laboratoryController.list);
routes.delete("/laboratory/:id", laboratoryController.delete);
routes.put("/laboratory/exams/:id", laboratoryController.connectExams);
routes.get("/laboratory/exam", laboratoryController.findByExamName);

routes.post("/exams", examsController.create);
routes.put("/exams/:id", examsController.update);
routes.get("/exams", examsController.list);
routes.delete("/exams/:id", examsController.delete);

export { routes };
