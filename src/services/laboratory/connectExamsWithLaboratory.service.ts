import { AppError } from "../../errors/AppError";
import { client } from "../../prisma";

interface IConnectExamsWithLaboratoryDTO {
  id: number;
  examsId: number[];
}

const connectExamsWithLaboratoryService = async ({
  examsId,
  id,
}: IConnectExamsWithLaboratoryDTO) => {
  try {
    const insertExams = examsId.map(async (examsId) => {
      await client.laboratory.update({
        where: { id },
        data: {
          exams: {
            connect: {
              id: Number(examsId),
            },
          },
        },
      });
    });

    await Promise.all(insertExams);
  } catch (error) {
    throw new AppError("Error to create laboratory", 500);
  }
};

export { connectExamsWithLaboratoryService };
