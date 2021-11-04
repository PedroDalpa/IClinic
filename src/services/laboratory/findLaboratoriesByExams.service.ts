import { AppError } from "../../errors/AppError";
import { client } from "../../prisma";

interface IFindLaboratoriesByExams {
  name: string;
}

const findLaboratoriesByExamsService = async ({
  name,
}: IFindLaboratoriesByExams) => {
  try {
    const laboratories = await client.laboratory.findMany({
      where: { active: true, exams: { every: { name } } },
    });

    return laboratories;
  } catch (error) {
    throw new AppError("Error to list laboratories!", 500);
  }
};

export { findLaboratoriesByExamsService };
