import { AppError } from "../../errors/AppError";
import { client } from "../../prisma";

const listExamsService = async () => {
  try {
    const exams = await client.exams.findMany({
      where: { active: true },
    });

    return exams;
  } catch (error) {
    throw new AppError("Error to list exams!", 500);
  }
};

export { listExamsService };
