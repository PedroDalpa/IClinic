import { request, Request, Response } from "express";
import { connectExamsWithLaboratoryService } from "../services/laboratory/connectExamsWithLaboratory.service";
import { createLaboratoryService } from "../services/laboratory/createLaboratory.service";
import { deleteLaboratoryService } from "../services/laboratory/deleteLaboratory.service";
import { disconnectExamsWithLaboratoryService } from "../services/laboratory/disconnectExamsWithLaboratory.service";
import { findLaboratoriesByExamsService } from "../services/laboratory/findLaboratoriesByExams.service";
import { listLaboratoryService } from "../services/laboratory/listLaboratory.service";
import { updateLaboratoryService } from "../services/laboratory/updateLaboratory.service";

const laboratoryController = {
  async create(request: Request, response: Response) {
    const { name, address } = request.body;

    await createLaboratoryService({ name, address });

    return response.status(201).json();
  },
  async list(request: Request, response: Response) {
    const laboratories = await listLaboratoryService();

    return response.json(laboratories);
  },
  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { name, address } = request.body;

    const laboratory = await updateLaboratoryService({
      id: Number(id),
      address,
      name,
    });

    return response.json(laboratory);
  },
  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const laboratory = await deleteLaboratoryService({
      id: Number(id),
    });

    return response.json(laboratory);
  },

  async connectExams(request: Request, response: Response) {
    const { id } = request.params;

    const { examsId } = request.body;

    await connectExamsWithLaboratoryService({ examsId, id: Number(id) });

    return response.json();
  },

  async findByExamName(request: Request, response: Response) {
    const { name } = request.query;

    const laboratories = await findLaboratoriesByExamsService({
      name: name as string,
    });

    return response.json(laboratories);
  },

  async disconnectExams(request: Request, response: Response) {
    const { id } = request.params;

    const { examsId } = request.body;

    await disconnectExamsWithLaboratoryService({ examsId, id: Number(id) });

    return response.json();
  },
};

export { laboratoryController };
