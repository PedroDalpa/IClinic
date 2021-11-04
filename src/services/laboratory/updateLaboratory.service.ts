import { AppError } from "../../errors/AppError";
import { client } from "../../prisma";

interface IUpdateLaboratoryDTO {
  id: number;
  name: string;
  address: string;
}

const updateLaboratoryService = async ({
  id,
  name,
  address,
}: IUpdateLaboratoryDTO) => {
  try {
    const laboratory = await client.laboratory.update({
      where: { id },
      data: { address, name },
    });

    return laboratory;
  } catch (error) {
    throw new AppError("Error to list laboratories!", 500);
  }
};

export { updateLaboratoryService };
