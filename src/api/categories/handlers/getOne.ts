import { CategoryHandlers } from '../interface';
import prisma from '../../../../client';

const getOneCategory: CategoryHandlers['getOne'] = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await prisma.category.findUniqueOrThrow({
      where: { id },
    });
    res.status(200).json(category);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default getOneCategory;
