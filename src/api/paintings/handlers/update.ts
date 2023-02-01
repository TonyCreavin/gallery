import { PaintingHandlers } from '../interface';
import prisma from '../../../../client';

const updatePainting: PaintingHandlers['update'] = async (req, res) => {
  const { id } = req.params;
  const { name, price, isSold, imageUrl, content, categoryId } = req.body;
  try {
    const painting = await prisma.painting.update({
      where: { id },
      data: {
        name,
        price,
        isSold,
        imageUrl,
        content,
        categoryId,
      },
    });
    res.status(200).json(painting);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
export default updatePainting;
