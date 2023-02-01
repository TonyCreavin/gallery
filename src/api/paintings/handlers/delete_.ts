import { PaintingHandlers } from '../interface';
import prisma from '../../../../client';

const deletePainting: PaintingHandlers['delete_'] = async (req, res) => {
  const { id } = req.params;
  try {
    const painting = await prisma.painting.delete({
      where: { id },
    });
    res.status(200).json(painting);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
export default deletePainting;
