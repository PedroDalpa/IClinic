import { AppError } from "../../errors/AppError";
import { client } from "../../prisma";

interface IDisconnectExamsWithLaboratoryDTO {
  id: number;
  examsId: number[];
}

const disconnectExamsWithLaboratoryService = async ({
  examsId,
  id,
}: IDisconnectExamsWithLaboratoryDTO) => {
  console.log(examsId, id);

  try {
    const insertExams = examsId.map(async (examsId) => {
      await client.laboratory.update({
        where: { id },
        data: {
          exams: {
            disconnect: {
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

export { disconnectExamsWithLaboratoryService };
