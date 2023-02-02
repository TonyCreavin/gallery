import { PaintingHandlers } from '../interface';
import prisma from '../../../../client';
import { resourceLimits } from 'worker_threads';
import asyncFormParser from '../../../../utils/asyncFormParse';
import cloudinaryUploader from '../../../../utils/cloudinary';

const createPainting: PaintingHandlers['create'] = async (req, res) => {
  try {
    const { fields, files } = await asyncFormParser(req);

    const transformFields = (fields: any) => {
      return Object.entries(fields).reduce((acc, [key, value]: any) => {
        return {
          ...acc,
          [key]: value[0],
        };
      }, {} as any);
    };

    const formatedFields = transformFields(fields);

    const uploadResponse = await cloudinaryUploader(files.image[0].path);

    const painting = await prisma.painting.create({
      data: {
        imageUrl: uploadResponse?.secure_url,
        ...formatedFields,
        isSold: formatedFields.isSold === 'true' ? true : false,
      },
    });
    res.status(201).json(painting);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default createPainting;
