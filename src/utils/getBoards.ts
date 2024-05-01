import prisma from "data/db";

export const getBoards = async (id: string) => {
  return await prisma.boards.findUnique({ where: { id } });
};
