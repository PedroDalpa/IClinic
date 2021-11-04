import { Request, Response } from "express";
import { createExamsService } from "../services/exams/createExams.service";
import { deleteExamsService } from "../services/exams/deleteExams.service";
import { listExamsService } from "../services/exams/listExams.service";
import { updateExamsService } from "../services/exams/updateExams.service";

const examsController = {
  async create(request: Request, response: Response) {
    const { name, type } = request.body;

    await createExamsService({ name, type });

    return response.status(201).json();
  },
  async list(request: Request, response: Response) {
    const exams = await listExamsService();

    return response.json(exams);
  },
  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { name, type } = request.body;

    const exams = await updateExamsService({
      id: Number(id),
      type,
      name,
    });

    return response.json(exams);
  },
  async delete(request: Request, response: Response) {
    const { id } = request.params;

    await deleteExamsService({
      id: Number(id),
    });

    return response.status(204).json();
  },
};

export { examsController };
