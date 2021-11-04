import { AppError } from "../../errors/AppError";
import { client } from "../../prisma";
interface IDeleteExams {
  id: number;
}
const deleteExamsService = async ({ id }: IDeleteExams) => {
  try {
    await client.exams.update({ where: { id }, data: { active: false } });
  } catch (error) {
    throw new AppError("Erro to delete exams", 500);
  }
};

export { deleteExamsService };
