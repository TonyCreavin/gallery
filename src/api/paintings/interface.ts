import { RequestHandler } from 'express';
import { Painting } from '@prisma/client';
import ResponseError from '../responseError';

type PaintingBodyCreate = {
  name: string;
  price: string;
  content: string;
  isSold: string;
  imageUrl: string;
  categoryId: string;
};
type QueryParam = {
  category?: 'include';
  categoryId?: string;
};
export interface PaintingHandlers {
  getAll: RequestHandler<null, Painting[] | ResponseError, null, QueryParam>;
  getOne: RequestHandler<
    { id: string },
    Painting | ResponseError,
    null,
    QueryParam
  >;
  create: RequestHandler<null, Painting | ResponseError, PaintingBodyCreate>;
  update: RequestHandler<
    { id: string },
    Painting | ResponseError,
    PaintingBodyCreate
  >;
  delete_: RequestHandler<{ id: string }, Painting | ResponseError, null>;
}
