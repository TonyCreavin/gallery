import { PaintingHandlers } from '../interface';
import prisma from '../../../client';

const createPainting: PaintingHandlers['create'] = async (req, res) => {
  const { name, price, isSold, content, imageUrl } = req.body;
  try {
    const painting = await prisma.painting.create({
      data: {
        name,
        price,
        isSold,
        content,
        imageUrl,
      },
    });
    res.status(201).json(painting);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default createPainting;
