import { AppError } from "../../errors/AppError";
import { client } from "../../prisma";

interface CreateExamsDTO {
  name: string;
  type: string;
}

const createExamsService = async ({ name, type }: CreateExamsDTO) => {
  try {
    await client.exams.create({ data: { type, name } });
  } catch (error) {
    throw new AppError("Error to create exams", 500);
  }
};

export { createExamsService };
