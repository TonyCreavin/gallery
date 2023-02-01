import { RequestHandler } from 'express';
import { Category } from '@prisma/client';
import ResponseError from '../responseError';

type CategoryBodyCreate = {
  name: string;
};

export interface CategoryHandlers {
  getAll: RequestHandler<null, Category[] | ResponseError, null>;
  getOne: RequestHandler<{ id: string }, Category | ResponseError, null>;
  create: RequestHandler<null, Category | ResponseError, CategoryBodyCreate>;
  update: RequestHandler<
    { id: string },
    Category | ResponseError,
    CategoryBodyCreate
  >;
  delete_: RequestHandler<{ id: string }, Category | ResponseError, null>;
}
