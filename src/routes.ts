import { Router } from "express";
import { laboratoryController } from "./controllers/laboratoryController";

const routes = Router();

routes.post("/laboratory", laboratoryController.create);
routes.put("/laboratory/:id", laboratoryController.update);
routes.get("/laboratory", laboratoryController.list);
routes.delete("/laboratory/:id", laboratoryController.delete);

export { routes };
