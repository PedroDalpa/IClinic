import { AppError } from "../../errors/AppError";
import { client } from "../../prisma";

interface IUpdateExamsDTO {
  id: number;
  name: string;
  type: string;
}

const updateExamsService = async ({ id, name, type }: IUpdateExamsDTO) => {
  try {
    const Exams = await client.exams.update({
      where: { id },
      data: { type, name },
    });

    return Exams;
  } catch (error) {
    throw new AppError("Error to list laboratories!", 500);
  }
};

export { updateExamsService };
