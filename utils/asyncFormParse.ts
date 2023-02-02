import { Request } from 'express';
import { Form } from 'multiparty';

function asyncFormParser(
  req: Request<any>
): Promise<{ files: any; fields: any }> {
  console.log('ici');
  return new Promise((res, rej) => {
    const form = new Form();
    form.parse(req, async (err, fields, files) => {
      console.log(err);
      if (err) rej(err);

      res({ fields, files });
    });
  });
}

export default asyncFormParser;
