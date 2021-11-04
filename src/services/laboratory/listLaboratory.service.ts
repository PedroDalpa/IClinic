import { AppError } from "../../errors/AppError";
import { client } from "../../prisma";

const listLaboratoryService = async () => {
  try {
    const laboratories = await client.laboratory.findMany({
      where: { active: true },
    });

    return laboratories;
  } catch (error) {
    throw new AppError("Error to list laboratories!", 500);
  }
};

export { listLaboratoryService };
