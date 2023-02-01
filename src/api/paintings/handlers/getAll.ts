import { PaintingHandlers } from '../interface';
import prisma from '../../../../client';

const getAllPaintings: PaintingHandlers['getAll'] = async (req, res) => {
  try {
    const paintings = await prisma.painting.findMany();
    res.status(200).json(paintings);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default getAllPaintings;
