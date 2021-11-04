import { AppError } from "../../errors/AppError";
import { client } from "../../prisma";

interface CreateLaboratoryDTO {
  name: string;
  address: string;
}

const createLaboratoryService = async ({
  name,
  address,
}: CreateLaboratoryDTO) => {
  try {
    await client.laboratory.create({ data: { name, address } });
  } catch (error) {
    throw new AppError("Error to create laboratory", 500);
  }
};

export { createLaboratoryService };
