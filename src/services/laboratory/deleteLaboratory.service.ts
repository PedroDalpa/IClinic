import { AppError } from "../../errors/AppError";
import { client } from "../../prisma";
interface IDeleteLaboratory {
  id: number;
}
const deleteLaboratoryService = async ({ id }: IDeleteLaboratory) => {
  try {
    await client.laboratory.update({ where: { id }, data: { active: false } });
  } catch (error) {
    throw new AppError("Erro to delete laboratory", 500);
  }
};

export { deleteLaboratoryService };
