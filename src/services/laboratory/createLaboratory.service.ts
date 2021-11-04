import { AppError } from "../../errors/AppError";
import { client } from "../../prisma";

interface ICreateLaboratoryDTO {
  name: string;
  address: string;
}

const createLaboratoryService = async ({
  name,
  address,
}: ICreateLaboratoryDTO) => {
  try {
    const laboratory = await client.laboratory.create({
      data: { name, address },
    });

    return laboratory;
  } catch (error) {
    throw new AppError("Error to create laboratory", 500);
  }
};

export { createLaboratoryService };
