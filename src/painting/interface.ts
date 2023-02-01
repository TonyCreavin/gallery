import { RequestHandler } from 'express';
import { Painting } from '@prisma/client';
import ResponseError from '../api/responseError';

type PaintingBodyCreate = {
  name: string;
  price: string;
  content: string;
  isSold: boolean;
  imageUrl: string;
  categoryId: string;
};

export interface PaintingHandlers {
  getAll: RequestHandler<null, Painting[] | ResponseError, null>;
  getOne: RequestHandler<{ id: string }, Painting | ResponseError, null>;
  create: RequestHandler<null, Painting | ResponseError, PaintingBodyCreate>;
  update: RequestHandler<
    { id: string },
    Painting | ResponseError,
    PaintingBodyCreate
  >;
  delete_: RequestHandler<{ id: string }, Painting | ResponseError, null>;
}
