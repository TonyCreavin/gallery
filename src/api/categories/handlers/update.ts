import { CategoryHandlers } from '../interface';
import prisma from '../../../../client';

const updateCategory: CategoryHandlers['update'] = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const category = await prisma.category.update({
      where: { id },
      data: {
        name,
      },
    });
    res.status(200).json(category);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
export default updateCategory;
