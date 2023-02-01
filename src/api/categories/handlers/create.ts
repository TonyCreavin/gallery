import { CategoryHandlers } from '../interface';
import prisma from '../../../../client';

const createCategory: CategoryHandlers['create'] = async (req, res) => {
  const { name } = req.body;
  try {
    const category = await prisma.category.create({
      data: {
        name,
      },
    });
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default createCategory;
