import { PaintingHandlers } from '../interface';
import prisma from '../../../client';

const getOnePainting: PaintingHandlers['getOne'] = async (req, res) => {
  const { id } = req.params;
  try {
    const painting = await prisma.painting.findUniqueOrThrow({
      where: { id },
    });
    res.status(200).json(painting);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default getOnePainting;
